function screen_support_extrude_5_5_outline_fn(){
    return new CSG.Path2D([[170.3922477,-95.3962764],[186.3922477,-95.3962764]]).appendPoint([186.3922477,-53.3962764]).appendPoint([170.3922477,-53.3962764]).appendPoint([170.3922477,-95.3962764]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[171.3922477,-94.3962764],[185.3922477,-94.3962764]]).appendPoint([185.3922477,-54.3962764]).appendPoint([171.3922477,-54.3962764]).appendPoint([171.3922477,-94.3962764]).close().innerToCAG()
).extrude({ offset: [0, 0, 5.5] });
}




                function l_screen_base_case_fn() {
                    

                // creating part 0 of case l_screen_base
                let l_screen_base__part_0 = screen_support_extrude_5_5_outline_fn();

                // make sure that rotations are relative
                let l_screen_base__part_0_bounds = l_screen_base__part_0.getBounds();
                let l_screen_base__part_0_x = l_screen_base__part_0_bounds[0].x + (l_screen_base__part_0_bounds[1].x - l_screen_base__part_0_bounds[0].x) / 2
                let l_screen_base__part_0_y = l_screen_base__part_0_bounds[0].y + (l_screen_base__part_0_bounds[1].y - l_screen_base__part_0_bounds[0].y) / 2
                l_screen_base__part_0 = translate([-l_screen_base__part_0_x, -l_screen_base__part_0_y, 0], l_screen_base__part_0);
                l_screen_base__part_0 = rotate([0,0,0], l_screen_base__part_0);
                l_screen_base__part_0 = translate([l_screen_base__part_0_x, l_screen_base__part_0_y, 0], l_screen_base__part_0);

                l_screen_base__part_0 = translate([0,0,1], l_screen_base__part_0);
                let result = l_screen_base__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return l_screen_base_case_fn();
            }

        