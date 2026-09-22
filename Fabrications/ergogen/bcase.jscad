function bcase_extrude_10_outline_fn(){
    return new CSG.Path2D([[201.998159,-149.8732143],[188.9709393,-172.4370208]]).appendArc([186.1492048,-173.1140985],{"radius":2,"clockwise":true,"large":false}).appendPoint([172.5505872,-164.2783771]).appendArc([171.9814468,-164.0243839],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.846218,-151.857646]).appendArc([126.2832472,-151.789167],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.0753078,-152.6211054]).appendArc([87.0591938,-152.6213824],{"radius":2,"clockwise":true,"large":false}).appendPoint([47.2935613,-153.1446144]).appendArc([45.2672477,-151.1447875],{"radius":2,"clockwise":true,"large":false}).appendPoint([45.2672477,-58.137051]).appendArc([46.6649849,-56.2298857],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.220936,-44.6859012]).appendArc([83.3142122,-44.6589173],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.0170144,-39.7371273]).appendArc([102.526001,-39.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.0845739,-39.6712764]).appendArc([131.4468987,-39.70437],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.0875969,-46.6381828]).appendArc([169.4499217,-46.6712764],{"radius":2,"clockwise":false,"large":false}).appendPoint([193.5172478,-46.6712764]).appendArc([195.5172478,-48.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([195.5172478,-123.9001108]).appendArc([195.5894516,-124.4326534],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.1939044,-148.3406717]).appendArc([201.998159,-149.8732143],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}


function plboard_extrude_7_outline_fn(){
    return new CSG.Path2D([[197.8446825,-151.0672465],[187.8407255,-168.3946084]]).appendArc([185.0713964,-169.1045949],{"radius":2,"clockwise":true,"large":false}).appendPoint([170.6426358,-160.3521047]).appendArc([170.3299411,-160.1979618],{"radius":2,"clockwise":false,"large":false}).appendPoint([152.879036,-153.4148276]).appendArc([152.5017488,-153.3093415],{"radius":2,"clockwise":false,"large":false}).appendPoint([130.2240686,-149.3811854]).appendArc([129.8631818,-149.3508471],{"radius":2,"clockwise":false,"large":false}).appendPoint([91.7494324,-149.6098453]).appendArc([89.7677865,-147.9659217],{"radius":2,"clockwise":true,"large":false}).appendPoint([88.5646493,-141.3152462]).appendArc([86.5965938,-139.6712764],{"radius":2,"clockwise":false,"large":false}).appendPoint([50.2672477,-139.6712764]).appendArc([48.2672477,-137.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([48.2672477,-61.6712764]).appendArc([50.2672477,-59.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([84.183845,-59.6712764]).appendArc([86.1837756,-57.6879424],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.2545105,-49.1997577]).appendArc([87.7454545,-47.2822746],{"radius":2,"clockwise":true,"large":false}).appendPoint([105.0170144,-42.7371273]).appendArc([105.526001,-42.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.0845739,-42.6712764]).appendArc([128.4468987,-42.70437],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.0875969,-49.6381828]).appendArc([166.4499217,-49.6712764],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.5172478,-49.6712764]).appendArc([192.5172478,-51.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([192.5172477,-120.1712764]).appendPoint([192.5172477,-134.5553715]).appendArc([192.6467978,-135.2634797],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.9830816,-149.3591383]).appendArc([197.8446825,-151.0672465],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 7] });
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
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = plboard_extrude_7_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function bcase_case_fn() {
                    

                // creating part 0 of case bcase
                let bcase__part_0 = bottom_case_fn();

                // make sure that rotations are relative
                let bcase__part_0_bounds = bcase__part_0.getBounds();
                let bcase__part_0_x = bcase__part_0_bounds[0].x + (bcase__part_0_bounds[1].x - bcase__part_0_bounds[0].x) / 2
                let bcase__part_0_y = bcase__part_0_bounds[0].y + (bcase__part_0_bounds[1].y - bcase__part_0_bounds[0].y) / 2
                bcase__part_0 = translate([-bcase__part_0_x, -bcase__part_0_y, 0], bcase__part_0);
                bcase__part_0 = rotate([0,0,0], bcase__part_0);
                bcase__part_0 = translate([bcase__part_0_x, bcase__part_0_y, 0], bcase__part_0);

                bcase__part_0 = translate([0,0,0], bcase__part_0);
                let result = bcase__part_0;
                
            

                // creating part 1 of case bcase
                let bcase__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let bcase__part_1_bounds = bcase__part_1.getBounds();
                let bcase__part_1_x = bcase__part_1_bounds[0].x + (bcase__part_1_bounds[1].x - bcase__part_1_bounds[0].x) / 2
                let bcase__part_1_y = bcase__part_1_bounds[0].y + (bcase__part_1_bounds[1].y - bcase__part_1_bounds[0].y) / 2
                bcase__part_1 = translate([-bcase__part_1_x, -bcase__part_1_y, 0], bcase__part_1);
                bcase__part_1 = rotate([0,0,0], bcase__part_1);
                bcase__part_1 = translate([bcase__part_1_x, bcase__part_1_y, 0], bcase__part_1);

                bcase__part_1 = translate([0,0,0], bcase__part_1);
                result = result.subtract(bcase__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bcase_case_fn();
            }

        