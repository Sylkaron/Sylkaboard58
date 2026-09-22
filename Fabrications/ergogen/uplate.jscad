function ucase_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[201.998159,-149.8732143],[188.9709393,-172.4370208]]).appendArc([186.1492048,-173.1140985],{"radius":2,"clockwise":true,"large":false}).appendPoint([172.5505872,-164.2783771]).appendArc([171.9814468,-164.0243839],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.846218,-151.857646]).appendArc([126.2832472,-151.789167],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.0753078,-152.6211054]).appendArc([87.0591938,-152.6213824],{"radius":2,"clockwise":true,"large":false}).appendPoint([47.2935613,-153.1446144]).appendArc([45.2672477,-151.1447875],{"radius":2,"clockwise":true,"large":false}).appendPoint([45.2672477,-58.137051]).appendArc([46.6649849,-56.2298857],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.220936,-44.6859012]).appendArc([83.3142122,-44.6589173],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.0170144,-39.7371273]).appendArc([102.526001,-39.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.0845739,-39.6712764]).appendArc([131.4468987,-39.70437],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.0875969,-46.6381828]).appendArc([169.4499217,-46.6712764],{"radius":2,"clockwise":false,"large":false}).appendPoint([193.5172478,-46.6712764]).appendArc([195.5172478,-48.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([195.5172478,-123.9001108]).appendArc([195.5894516,-124.4326534],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.1939044,-148.3406717]).appendArc([201.998159,-149.8732143],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[171.3922477,-119.9212765],[185.3922477,-119.9212765]]).appendPoint([185.3922477,-105.9212765]).appendPoint([171.3922477,-105.9212765]).appendPoint([171.3922477,-119.9212765]).close().innerToCAG()
.union(
    new CSG.Path2D([[135.2290947,-145.7196724],[149.0656436,-148.1594293]]).appendPoint([151.5054005,-134.3228804]).appendPoint([137.6688516,-131.8831235]).appendPoint([135.2290947,-145.7196724]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.7422478,-61.1962764],[123.7922478,-61.1962764]]).appendPoint([123.7922478,-47.1462764]).appendPoint([109.7422478,-47.1462764]).appendPoint([109.7422478,-61.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.7422477,-80.1962764],[123.7922477,-80.1962764]]).appendPoint([123.7922477,-66.1462764]).appendPoint([109.7422477,-66.1462764]).appendPoint([109.7422477,-80.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.7422477,-99.1962764],[123.7922477,-99.1962764]]).appendPoint([123.7922477,-85.1462764]).appendPoint([109.7422477,-85.1462764]).appendPoint([109.7422477,-99.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.7422477,-118.1962764],[123.7922477,-118.1962764]]).appendPoint([123.7922477,-104.1462764]).appendPoint([109.7422477,-104.1462764]).appendPoint([109.7422477,-118.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.7422478,-66.1962764],[104.7922478,-66.1962764]]).appendPoint([104.7922478,-52.1462764]).appendPoint([90.7422478,-52.1462764]).appendPoint([90.7422478,-66.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.7422478,-85.1962764],[104.7922478,-85.1962764]]).appendPoint([104.7922478,-71.1462764]).appendPoint([90.7422478,-71.1462764]).appendPoint([90.7422478,-85.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.7422478,-104.1962764],[104.7922478,-104.1962764]]).appendPoint([104.7922478,-90.1462764]).appendPoint([90.7422478,-90.1462764]).appendPoint([90.7422478,-104.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.7422478,-123.1962764],[104.7922478,-123.1962764]]).appendPoint([104.7922478,-109.1462764]).appendPoint([90.7422478,-109.1462764]).appendPoint([90.7422478,-123.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.7422478,-78.1962764],[85.7922478,-78.1962764]]).appendPoint([85.7922478,-64.1462764]).appendPoint([71.7422478,-64.1462764]).appendPoint([71.7422478,-78.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.7422478,-97.1962764],[85.7922478,-97.1962764]]).appendPoint([85.7922478,-83.1462764]).appendPoint([71.7422478,-83.1462764]).appendPoint([71.7422478,-97.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.7422478,-116.1962764],[85.7922478,-116.1962764]]).appendPoint([85.7922478,-102.1462764]).appendPoint([71.7422478,-102.1462764]).appendPoint([71.7422478,-116.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.7422477,-135.1962764],[85.7922477,-135.1962764]]).appendPoint([85.7922477,-121.1462764]).appendPoint([71.7422477,-121.1462764]).appendPoint([71.7422477,-135.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[52.7422478,-78.1962764],[66.7922478,-78.1962764]]).appendPoint([66.7922478,-64.1462764]).appendPoint([52.7422478,-64.1462764]).appendPoint([52.7422478,-78.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[52.7422478,-97.1962764],[66.7922478,-97.1962764]]).appendPoint([66.7922478,-83.1462764]).appendPoint([52.7422478,-83.1462764]).appendPoint([52.7422478,-97.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[52.7422478,-116.1962764],[66.7922478,-116.1962764]]).appendPoint([66.7922478,-102.1462764]).appendPoint([52.7422478,-102.1462764]).appendPoint([52.7422478,-116.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[52.7422477,-135.1962764],[66.7922477,-135.1962764]]).appendPoint([66.7922477,-121.1462764]).appendPoint([52.7422477,-121.1462764]).appendPoint([52.7422477,-135.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.5422477,-145.1462764],[108.5922477,-145.1462764]]).appendPoint([108.5922477,-131.0962764]).appendPoint([94.5422477,-131.0962764]).appendPoint([94.5422477,-145.1462764]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.7422478,-68.1962764],[161.7922478,-68.1962764]]).appendPoint([161.7922478,-54.1462764]).appendPoint([147.7422478,-54.1462764]).appendPoint([147.7422478,-68.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.7422477,-87.1962764],[161.7922477,-87.1962764]]).appendPoint([161.7922477,-73.1462764]).appendPoint([147.7422477,-73.1462764]).appendPoint([147.7422477,-87.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.7422477,-106.1962764],[161.7922477,-106.1962764]]).appendPoint([161.7922477,-92.1462764]).appendPoint([147.7422477,-92.1462764]).appendPoint([147.7422477,-106.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.7422477,-125.1962764],[161.7922477,-125.1962764]]).appendPoint([161.7922477,-111.1462764]).appendPoint([147.7422477,-111.1462764]).appendPoint([147.7422477,-125.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.7422478,-68.1962764],[142.7922478,-68.1962764]]).appendPoint([142.7922478,-54.1462764]).appendPoint([128.7422478,-54.1462764]).appendPoint([128.7422478,-68.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.7422477,-87.1962764],[142.7922477,-87.1962764]]).appendPoint([142.7922477,-73.1462764]).appendPoint([128.7422477,-73.1462764]).appendPoint([128.7422477,-87.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.7422477,-106.1962764],[142.7922477,-106.1962764]]).appendPoint([142.7922477,-92.1462764]).appendPoint([128.7422477,-92.1462764]).appendPoint([128.7422477,-106.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.7422477,-125.1962764],[142.7922477,-125.1962764]]).appendPoint([142.7922477,-111.1462764]).appendPoint([128.7422477,-111.1462764]).appendPoint([128.7422477,-125.1962764]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.4422477,-145.1462764],[129.4922477,-145.1462764]]).appendPoint([129.4922477,-131.0962764]).appendPoint([115.4422477,-131.0962764]).appendPoint([115.4422477,-145.1462764]).close().innerToCAG()
).union(
    new CSG.Path2D([[173.0132071,-157.0266236],[185.1808641,-164.0516236]]).appendPoint([192.2058641,-151.8839666]).appendPoint([180.0382071,-144.8589666]).appendPoint([173.0132071,-157.0266236]).close().innerToCAG()
).union(
    new CSG.Path2D([[154.615766,-149.7203072],[167.8184474,-154.5256902]]).appendPoint([172.6238304,-141.3230088]).appendPoint([159.421149,-136.5176258]).appendPoint([154.615766,-149.7203072]).close().innerToCAG()
).union(
    new CSG.Path2D([[171.3922477,-94.3962764],[185.3922477,-94.3962764]]).appendPoint([185.3922477,-54.3962764]).appendPoint([171.3922477,-54.3962764]).appendPoint([171.3922477,-94.3962764]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}


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
            
            

                function uplate_case_fn() {
                    

                // creating part 0 of case uplate
                let uplate__part_0 = ucase_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let uplate__part_0_bounds = uplate__part_0.getBounds();
                let uplate__part_0_x = uplate__part_0_bounds[0].x + (uplate__part_0_bounds[1].x - uplate__part_0_bounds[0].x) / 2
                let uplate__part_0_y = uplate__part_0_bounds[0].y + (uplate__part_0_bounds[1].y - uplate__part_0_bounds[0].y) / 2
                uplate__part_0 = translate([-uplate__part_0_x, -uplate__part_0_y, 0], uplate__part_0);
                uplate__part_0 = rotate([0,0,0], uplate__part_0);
                uplate__part_0 = translate([uplate__part_0_x, uplate__part_0_y, 0], uplate__part_0);

                uplate__part_0 = translate([0,0,0], uplate__part_0);
                let result = uplate__part_0;
                
            

                // creating part 1 of case uplate
                let uplate__part_1 = l_screen_base_case_fn();

                // make sure that rotations are relative
                let uplate__part_1_bounds = uplate__part_1.getBounds();
                let uplate__part_1_x = uplate__part_1_bounds[0].x + (uplate__part_1_bounds[1].x - uplate__part_1_bounds[0].x) / 2
                let uplate__part_1_y = uplate__part_1_bounds[0].y + (uplate__part_1_bounds[1].y - uplate__part_1_bounds[0].y) / 2
                uplate__part_1 = translate([-uplate__part_1_x, -uplate__part_1_y, 0], uplate__part_1);
                uplate__part_1 = rotate([0,0,0], uplate__part_1);
                uplate__part_1 = translate([uplate__part_1_x, uplate__part_1_y, 0], uplate__part_1);

                uplate__part_1 = translate([0,0,0], uplate__part_1);
                result = result.union(uplate__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return uplate_case_fn();
            }

        