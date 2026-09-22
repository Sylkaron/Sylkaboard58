function bcase_extrude_10_outline_fn(){
    return new CSG.Path2D([[201.998159,-149.8732143],[188.9709393,-172.4370208]]).appendArc([186.1492048,-173.1140985],{"radius":2,"clockwise":true,"large":false}).appendPoint([172.5505872,-164.2783771]).appendArc([171.9814468,-164.0243839],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.846218,-151.857646]).appendArc([126.2832472,-151.789167],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.0753078,-152.6211054]).appendArc([87.0591938,-152.6213824],{"radius":2,"clockwise":true,"large":false}).appendPoint([47.2935613,-153.1446144]).appendArc([45.2672477,-151.1447875],{"radius":2,"clockwise":true,"large":false}).appendPoint([45.2672477,-58.137051]).appendArc([46.6649849,-56.2298857],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.220936,-44.6859012]).appendArc([83.3142122,-44.6589173],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.0170144,-39.7371273]).appendArc([102.526001,-39.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.0845739,-39.6712764]).appendArc([131.4468987,-39.70437],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.0875969,-46.6381828]).appendArc([169.4499217,-46.6712764],{"radius":2,"clockwise":false,"large":false}).appendPoint([193.5172478,-46.6712764]).appendArc([195.5172478,-48.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([195.5172478,-123.9001108]).appendArc([195.5894516,-124.4326534],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.1939044,-148.3406717]).appendArc([201.998159,-149.8732143],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = bcase_extrude_10_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        