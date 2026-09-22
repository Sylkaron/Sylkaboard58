function screen_support_extrude_5_5_outline_fn(){
    return new CSG.Path2D([[170.3922477,-95.3962764],[186.3922477,-95.3962764]]).appendPoint([186.3922477,-53.3962764]).appendPoint([170.3922477,-53.3962764]).appendPoint([170.3922477,-95.3962764]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[171.3922477,-94.3962764],[185.3922477,-94.3962764]]).appendPoint([185.3922477,-54.3962764]).appendPoint([171.3922477,-54.3962764]).appendPoint([171.3922477,-94.3962764]).close().innerToCAG()
).extrude({ offset: [0, 0, 5.5] });
}




                function r_screen_base_case_fn() {
                    

                // creating part 0 of case r_screen_base
                let r_screen_base__part_0 = screen_support_extrude_5_5_outline_fn();

                // make sure that rotations are relative
                let r_screen_base__part_0_bounds = r_screen_base__part_0.getBounds();
                let r_screen_base__part_0_x = r_screen_base__part_0_bounds[0].x + (r_screen_base__part_0_bounds[1].x - r_screen_base__part_0_bounds[0].x) / 2
                let r_screen_base__part_0_y = r_screen_base__part_0_bounds[0].y + (r_screen_base__part_0_bounds[1].y - r_screen_base__part_0_bounds[0].y) / 2
                r_screen_base__part_0 = translate([-r_screen_base__part_0_x, -r_screen_base__part_0_y, 0], r_screen_base__part_0);
                r_screen_base__part_0 = rotate([0,0,0], r_screen_base__part_0);
                r_screen_base__part_0 = translate([r_screen_base__part_0_x, r_screen_base__part_0_y, 0], r_screen_base__part_0);

                r_screen_base__part_0 = translate([0,0,-5], r_screen_base__part_0);
                let result = r_screen_base__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return r_screen_base_case_fn();
            }

        