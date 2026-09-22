module.exports = {
  params: {
    reversible: { type: "boolean", value: true },
    label: { type: "boolean", value: true },
    side: 'F',
    instructions: { type: "boolean", value: true },
    traces: { type: "boolean", value: true },
    P0: { type: "net", value: "P0" },
    P1: { type: "net", value: "P1" },
    P2: { type: "net", value: "P2" },
    P3: { type: "net", value: "P3" },
    P4: { type: "net", value: "P4" },
    P5: { type: "net", value: "P5" },
    P6: { type: "net", value: "P6" },
    P7: { type: "net", value: "P7" },
    P8: { type: "net", value: "P8" },

    V5:  { type: "net", value: "V5" },
    GND: { type: "net", value: "GND" },
    V3:  { type: "net", value: "V3" },
    P29: { type: "net", value: "P29" },
    P28: { type: "net", value: "P28" },
    P27: { type: "net", value: "P27" },
    P26: { type: "net", value: "P26" },
    P15: { type: "net", value: "P15" },
    P14: { type: "net", value: "P14" },

    P13: { type: "net", value: "P13" },
    P12: { type: "net", value: "P12" },
    P11: { type: "net", value: "P11" },
    P10: { type: "net", value: "P10" },
    P9:  { type: "net", value: "P9" },
  },
  body: (p) => {
    /*
     * Left column  (top→bottom): V5, GND, V3, P29, P28, P27, P26, P15, P14
     * Right column (top→bottom): P0, P1, P2, P3,  P4,  P5,  P6,  P7,  P8
     *
     * Each entry is [left_net, right_net].
     * When reversible or placed on the back, the order is flipped so that the
     * mirror image still routes to the correct physical pads.
     */
    let pin_nets = [
      [p.V5.str,  p.P0.str],
      [p.GND.str, p.P1.str],
      [p.V3.str,  p.P2.str],
      [p.P29.str, p.P3.str],
      [p.P28.str, p.P4.str],
      [p.P27.str, p.P5.str],
      [p.P26.str, p.P6.str],
      [p.P15.str, p.P7.str],
      [p.P14.str, p.P8.str],
    ];

    // Local (internal) nets used by the reversible jumper pads so that the
    // through-holes are net-isolated from the destination nets until the
    // jumpers are soldered.
    const local_nets = pin_nets.map((_, i) => p.local_net(i));
    const local_nets_right = pin_nets.map((_, i) =>
      p.local_net(spacing_const().total_pin_num - 1 - i)
    );

    if (p.reversible || p.side === "B") {
      pin_nets = pin_nets.slice().reverse();
    }

    /*
     * These constants control the geometry of the footprint.
     * Adjust them here if you ever want to support a different MCU.
     *
     *   top_left_pin    – position of pin 0 on the left column
     *   top_right_pin   – position of pin 0 on the right column
     *   pin_dist        – vertical pitch between pins
     *   total_pin_num   – total pin count (must be even)
     *   pin_to_male_pad – distance from the THT hole to the male solder-bridge pad
     *   pin_to_female_pad – distance from the THT hole to the female solder-bridge pad
     *   pin_to_via      – distance from the THT hole to the via
     */
    function spacing_const() {
      return {
        top_left_pin:      { x: -7.62, y: -10.16 },
        top_right_pin:     { x:  7.62, y: -10.16 },
        pin_dist:          2.54,
        total_pin_num:     18,   // Must be divisible by 2
        pin_to_male_pad:   2,
        pin_to_female_pad: 2.845,
        pin_to_via:        4.358,
      };
    }
    const spacing = spacing_const();

    /*
     * Routing corners for the cross-over traces used in the reversible footprint.
     *
     *   top_left  ──────────────────  top_right
     *      ↑    \                  /     ↑
     *    (via)   \________________/    (via)
     *      ↓    /                  \     ↓
     *   bot_left ──────────────────  bot_right
     *
     * Each value is the distance from the pin centre to the bend corner.
     */
    const trace_spacing = {
      top_left:    { x: 3.6, y: 0.85 },
      top_right:   { x: 5.2, y: 0.85 },
      bottom_left: { x: 5.2, y: 0.85 },
      bottom_right:{ x: 3.6, y: 0.85 },
    };

    // ─── helpers ──────────────────────────────────────────────────────────────

    /*
     * Returns the (x, y, angle) from the ergogen `p.at` string so that
     * adjust_point() can transform footprint-local coordinates into board
     * coordinates (needed for traces which live outside the footprint body).
     */
    const get_at_coordinates = () => {
      const pattern = /\(at (-?[\d.]+) (-?[\d.]+) (-?[\d.]+)\)/;
      const matches = p.at.match(pattern);
      if (matches && matches.length === 4) {
        return [parseFloat(matches[1]), parseFloat(matches[2]), parseFloat(matches[3])];
      }
      return null;
    };

    /*
     * Transforms a footprint-local (x, y) point into the rotated/translated
     * board coordinate required for `(segment …)` entries outside the footprint.
     */
    const adjust_point = (x, y) => {
      const at_l = get_at_coordinates();
      if (at_l === null) {
        throw new Error(`Could not parse p.at coordinates: ${p.at}`);
      }
      const [at_x, at_y, at_angle] = at_l;
      const adj_x = at_x + x;
      const adj_y = at_y + y;
      const radians = (Math.PI / 180) * at_angle;
      const cos = Math.cos(radians);
      const sin = Math.sin(radians);
      const nx = cos * (adj_x - at_x) + sin * (adj_y - at_y) + at_x;
      const ny = cos * (adj_y - at_y) - sin * (adj_x - at_x) + at_y;
      return `${nx.toFixed(2)} ${ny.toFixed(2)}`;
    };

    // ─── pad generators ───────────────────────────────────────────────────────

    /*
     * Generates the 18 oval through-holes that accept pin headers.
     *
     * In reversible mode the holes connect to local (internal) nets so that
     * the net assignment is determined entirely by which jumper pads are
     * bridged.  In non-reversible mode they connect directly to pin_nets.
     */
    const get_thru_hole = () => {
      let out = "";
      for (let i = 0; i < spacing.total_pin_num / 2; i++) {
        const left_net  = p.reversible ? p.local_net(i).str                              : pin_nets[i][0];
        const right_net = p.reversible ? p.local_net(spacing.total_pin_num - 1 - i).str : pin_nets[i][1];

        out += `(pad ${i} thru_hole oval `
             + `(at ${spacing.top_left_pin.x} ${spacing.top_left_pin.y + i * spacing.pin_dist} ${p.rot}) `
             + `(size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${left_net})\n`;

        out += `(pad ${spacing.total_pin_num - 1 - i} thru_hole oval `
             + `(at ${spacing.top_right_pin.x} ${spacing.top_right_pin.y + i * spacing.pin_dist} ${180 + p.rot}) `
             + `(size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${right_net})\n`;
      }
      return out;
    };

    /*
     * Arrow-shaped SMD pads used for the solder-bridge jumpers.
     *
     *  Male  (►)  – the pointed arrow tip soldered to the component pad
     *  Female(◄)  – the receiving arrowhead soldered to the via/destination net
     *
     * These shapes come from infused-kim's ergogen footprint guide:
     * https://nilnil.notion.site/Convert-Kicad-Footprints-to-Ergogen-8340ce87ad554c69af4e3f92bc9a0898
     */
    const male_pad = `
      (zone_connect 2)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 -0.625) (xy -0.25 -0.625)
            (xy 0.25 0)
            (xy -0.25 0.625) (xy -0.5 0.625)
          ) (width 0) (fill yes))
      )
    )\n`;

    const female_pad = `
      (zone_connect 2)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.65 -0.625) (xy 0.5 -0.625)
            (xy 0.5 0.625)
            (xy -0.65 0.625) (xy -0.15 0)
          ) (width 0) (fill yes))
      )
    )\n`;

    /*
     * Generates all SMD solder-bridge pads and vias for the reversible variant.
     *
     * For each row i:
     *
     *  Left side
     *  ─────────
     *  Via      → pin_nets[i][0]  (destination net, left column)
     *  F male   → local_net(i)    (connects to THT hole on front)
     *  F female → pin_nets[i][1]  (destination net, right column – cross-over trace on F.Cu)
     *  B male   → local_net(i)    (connects to THT hole on back)
     *  B female → pin_nets[i][0]  (destination net, left column – straight trace on B.Cu)
     *
     *  Right side (mirror)
     *  ───────────────────
     *  Via      → pin_nets[i][1]
     *  B male   → local_net(N-1-i)
     *  B female → pin_nets[i][0]  (cross-over on B.Cu)
     *  F female → pin_nets[i][0]  (straight on F.Cu – NOTE: was wrong in original)
     *  F male   → local_net(N-1-i)
     */
    const get_solder_pads = () => {
      let out = "";
      const N = spacing.total_pin_num;

      for (let i = 0; i < N / 2; i++) {
        const lx = spacing.top_left_pin.x;
        const rx = spacing.top_right_pin.x;
        const y  = spacing.top_left_pin.y + i * spacing.pin_dist; // same for both sides
        const lnet = pin_nets[i][0];
        const rnet = pin_nets[i][1];
        const li   = p.local_net(i).str;
        const ri   = p.local_net(N - 1 - i).str;

        // ── Left via ──────────────────────────────────────────────────────────
        out += `\t\t(pad ${i} thru_hole circle `
             + `(at ${lx + spacing.pin_to_via} ${y}) `
             + `(size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${lnet})\n`;

        // ── Left F.Cu male (→ local net, connects to THT left pad on front) ──
        out += `\t\t(pad ${i} smd custom `
             + `(at ${lx + spacing.pin_to_male_pad} ${y} ${p.rot}) `
             + `(size 0.2 0.2) (layers F.Cu F.Mask) ${li}`;
        out += male_pad;

        // ── Left F.Cu female (→ right dst net, feeds cross-over trace) ────────
        out += `\t\t(pad ${N - 1 - i} smd custom `
             + `(at ${lx + spacing.pin_to_female_pad} ${y} ${p.rot}) `
             + `(size 0.2 0.2) (layers F.Cu F.Mask) ${rnet}`;
        out += female_pad;

        // ── Left B.Cu male (→ local net, connects to THT left pad on back) ───
        out += `\t\t(pad ${i} smd custom `
             + `(at ${lx + spacing.pin_to_male_pad} ${y} ${p.rot}) `
             + `(size 0.2 0.2) (layers B.Cu B.Mask) ${li}`;
        out += male_pad;

        // ── Left B.Cu female (→ left dst net, feeds straight via trace) ───────
        out += `\t\t(pad ${i} smd custom `
             + `(at ${lx + spacing.pin_to_female_pad} ${y} ${p.rot}) `
             + `(size 0.2 0.2) (layers B.Cu B.Mask) ${lnet}`;
        out += female_pad;

        // ── Right via ─────────────────────────────────────────────────────────
        out += `\t\t(pad ${N - 1 - i} thru_hole circle `
             + `(at ${rx - spacing.pin_to_via} ${y}) `
             + `(size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${rnet})\n`;

        // ── Right B.Cu male (→ local net, connects to THT right pad on back) ─
        out += `\t\t(pad ${N - 1 - i} smd custom `
             + `(at ${rx - spacing.pin_to_male_pad} ${y} ${180 + p.rot}) `
             + `(size 0.2 0.2) (layers B.Cu B.Mask) ${ri}`;
        out += male_pad;

        // ── Right B.Cu female (→ left dst net, feeds cross-over trace) ────────
        out += `\t\t(pad ${N - 1 - i} smd custom `
             + `(at ${rx - spacing.pin_to_female_pad} ${y} ${180 + p.rot}) `
             + `(size 0.2 0.2) (layers B.Cu B.Mask) ${lnet}`;
        out += female_pad;

        // ── Right F.Cu female (→ left dst net, straight trace on F.Cu) ────────
        out += `\t\t(pad ${i} smd custom `
             + `(at ${rx - spacing.pin_to_female_pad} ${y} ${180 + p.rot}) `
             + `(size 0.2 0.2) (layers F.Cu F.Mask) ${lnet}`;
        out += female_pad;

        // ── Right F.Cu male (→ local net, connects to THT right pad on front) ─
        out += `\t\t(pad ${N - 1 - i} smd custom `
             + `(at ${rx - spacing.pin_to_male_pad} ${y} ${180 + p.rot}) `
             + `(size 0.2 0.2) (layers F.Cu F.Mask) ${ri}`;
        out += male_pad;
      }
      return out;
    };

    // ─── traces ───────────────────────────────────────────────────────────────

    /*
     * Generates the PCB traces that complete the reversible routing.
     *
     * For each row two routes are needed:
     *
     *  (A) Left female → (corner top-left → corner top-right) → Right via   [F.Cu cross-over]
     *  (B) Right female → (corner bot-right → corner bot-left) → Left via   [F.Cu cross-over]
     *  (C) Left female → Left via     [B.Cu straight]
     *  (D) Right female → Right via   [B.Cu straight]
     *
     * Plus short stubs connecting each male pad to its THT pin on both layers:
     *  (E) Left male  pad ↔ Left  THT hole   [F.Cu & B.Cu]
     *  (F) Right male pad ↔ Right THT hole   [F.Cu & B.Cu]
     */
    const get_traces = () => {
      let out = "";
      const lx = spacing.top_left_pin.x;
      const rx = spacing.top_right_pin.x;
      const ly = spacing.top_left_pin.y;

      for (let i = 0; i < spacing.total_pin_num / 2; i++) {
        const y = ly + i * spacing.pin_dist;

        // (E) Left male pad ↔ Left THT pin  [F.Cu + B.Cu stub]
        out += `\t(segment (start ${adjust_point(lx + spacing.pin_to_male_pad, y)}) (end ${adjust_point(lx, y)}) (width 0.25) (layer "F.Cu"))\n`;
        out += `\t(segment (start ${adjust_point(lx + spacing.pin_to_male_pad, y)}) (end ${adjust_point(lx, y)}) (width 0.25) (layer "B.Cu"))\n`;

        // (F) Right male pad ↔ Right THT pin [F.Cu + B.Cu stub]
        out += `\t(segment (start ${adjust_point(rx - spacing.pin_to_male_pad, y)}) (end ${adjust_point(rx, y)}) (width 0.25) (layer "F.Cu"))\n`;
        out += `\t(segment (start ${adjust_point(rx - spacing.pin_to_male_pad, y)}) (end ${adjust_point(rx, y)}) (width 0.25) (layer "B.Cu"))\n`;

        // (A) Left female → top-left corner → top-right corner → Right via  [F.Cu]
        out += `\t(segment (start ${adjust_point(lx + spacing.pin_to_female_pad, y)}) `
             + `(end ${adjust_point(lx + trace_spacing.top_left.x, y - trace_spacing.top_left.y)}) (width 0.25) (layer "F.Cu"))\n`;
        out += `\t(segment (start ${adjust_point(lx + trace_spacing.top_left.x, y - trace_spacing.top_left.y)}) `
             + `(end ${adjust_point(rx - trace_spacing.top_right.x, y - trace_spacing.top_right.y)}) (width 0.25) (layer "F.Cu"))\n`;
        out += `\t(segment (start ${adjust_point(rx - trace_spacing.top_right.x, y - trace_spacing.top_right.y)}) `
             + `(end ${adjust_point(rx - spacing.pin_to_via, y)}) (width 0.25) (layer "F.Cu"))\n`;

        // (B) Right female → bot-right corner → bot-left corner → Left via  [F.Cu]
        out += `\t(segment (start ${adjust_point(rx - spacing.pin_to_female_pad, y)}) `
             + `(end ${adjust_point(rx - trace_spacing.bottom_right.x, y + trace_spacing.bottom_right.y)}) (width 0.25) (layer "F.Cu"))\n`;
        out += `\t(segment (start ${adjust_point(rx - trace_spacing.bottom_right.x, y + trace_spacing.bottom_right.y)}) `
             + `(end ${adjust_point(lx + trace_spacing.bottom_left.x, y + trace_spacing.bottom_left.y)}) (width 0.25) (layer "F.Cu"))\n`;
        out += `\t(segment (start ${adjust_point(lx + trace_spacing.bottom_left.x, y + trace_spacing.bottom_left.y)}) `
             + `(end ${adjust_point(lx + spacing.pin_to_via, y)}) (width 0.25) (layer "F.Cu"))\n`;

        // (C) Left female → Left via  [B.Cu straight]
        out += `\t(segment (start ${adjust_point(lx + spacing.pin_to_female_pad, y)}) `
             + `(end ${adjust_point(lx + spacing.pin_to_via, y)}) (width 0.25) (layer "B.Cu"))\n`;

        // (D) Right female → Right via  [B.Cu straight]
        out += `\t(segment (start ${adjust_point(rx - spacing.pin_to_female_pad, y)}) `
             + `(end ${adjust_point(rx - spacing.pin_to_via, y)}) (width 0.25) (layer "B.Cu"))\n`;
      }
      return out;
    };

    // ─── silkscreen text ──────────────────────────────────────────────────────

    /* Front silkscreen labels */
    const label_txt_front = `
      (fp_text user "XIAO"  (at 0  0.5 ${p.rot}) (layer "F.SilkS")
        (effects (font (size 1 1) (thickness 0.15))))
      (fp_text user "Seeed" (at 0 -1.5 ${p.rot}) (layer "F.SilkS")
        (effects (font (size 1 1) (thickness 0.15))))
    `;

    /* Back silkscreen labels (mirrored) */
    const label_txt_back = `
      (fp_text user "XIAO"  (at 0  0.5 ${p.rot}) (layer "B.SilkS")
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
      (fp_text user "Seeed" (at 0 -1.5 ${p.rot}) (layer "B.SilkS")
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `;

    /* Assembly instructions showing which side to jumper */
    const instructions = `
      (fp_text user "R. Side - Jumper Here" (at 0 13 ${p.rot}) (layer "F.SilkS")
        (effects (font (size 1 1) (thickness 0.15))))
      (fp_text user "L. Side - Jumper Here" (at 0 13 ${p.rot}) (layer "B.SilkS")
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `;

    // ─── non-reversible (standard) variant ───────────────────────────────────

    const standard = `
(footprint "xiao-ble-tht" (version 20211014) (generator pcbnew)
  ${p.at}
  (layer "F.Cu")
  (tedit 62108D0B)
  (attr smd exclude_from_pos_files)

  (fp_rect (start -9 -11.75) (end 9 11.75) (layer "F.SilkS") (width 0.12) (fill none))

  (pad "18" thru_hole oval (at  5.08 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P13.str})
  (pad "19" thru_hole oval (at  2.54 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P12.str})
  (pad "20" thru_hole oval (at  0    10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P11.str})
  (pad "21" thru_hole oval (at -2.54 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P10.str})
  (pad "22" thru_hole oval (at -5.08 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P9.str})

  ${get_thru_hole()}
  ${p.label ? label_txt_front : ""}
  ${p.instructions ? instructions : ""}
)
    `;

    // ─── reversible variant ───────────────────────────────────────────────────

    const reversible_txt = `
(footprint "xiao-ble-tht" (version 20211014) (generator pcbnew)
  ${p.at}
  (layer "F.Cu")
  (tedit 62108D0B)
  (attr smd exclude_from_pos_files)

  (fp_rect (start -9 -11.75) (end 9 11.75) (layer "F.SilkS") (width 0.12) (fill none))
  (fp_rect (start -9 -11.75) (end 9 11.75) (layer "B.SilkS") (width 0.12) (fill none))

  ${get_thru_hole()}
  ${get_solder_pads()}

  (pad "18" thru_hole oval (at  5.08 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P13.str})
  (pad "19" thru_hole oval (at  2.54 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P12.str})
  (pad "20" thru_hole oval (at  0    10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P11.str})
  (pad "21" thru_hole oval (at -2.54 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P10.str})
  (pad "22" thru_hole oval (at -5.08 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P9.str})

  ${p.label ? label_txt_front : ""}
  ${p.label ? label_txt_back  : ""}
  ${p.instructions ? instructions : ""}
)
    `;

    // ─── final assembly ───────────────────────────────────────────────────────

    return `
      ${p.reversible ? reversible_txt : standard}
      ${p.traces && p.reversible ? get_traces() : ""}
    `;
  },
};
