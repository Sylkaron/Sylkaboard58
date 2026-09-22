function compact_plate_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[196.4832567,-151.4253053],[187.4645447,-167.0461726]]).appendArc([184.7123431,-167.766432],{"radius":2,"clockwise":true,"large":false}).appendPoint([170.0458623,-159.0688936]).appendArc([169.7316439,-158.9178808],{"radius":2,"clockwise":false,"large":false}).appendPoint([152.0591498,-152.2509789]).appendArc([151.7005138,-152.1526355],{"radius":2,"clockwise":false,"large":false}).appendPoint([131.3778271,-148.5691975]).appendArc([131.0264035,-148.5388173],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.7414046,-148.6178216]).appendArc([90.7692219,-146.9738561],{"radius":2,"clockwise":true,"large":false}).appendPoint([89.5646493,-140.3152462]).appendArc([87.5965938,-138.6712764],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.2672477,-138.6712764]).appendArc([49.2672477,-136.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([49.2672477,-62.6712764]).appendArc([51.2672477,-60.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([85.183845,-60.6712764]).appendArc([87.1837756,-58.6879424],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.2545105,-50.1997577]).appendArc([88.7454545,-48.2822746],{"radius":2,"clockwise":true,"large":false}).appendPoint([106.0170144,-43.7371273]).appendArc([106.526001,-43.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.0845739,-43.6712764]).appendArc([127.4468987,-43.70437],{"radius":2,"clockwise":true,"large":false}).appendPoint([165.0875969,-50.6381828]).appendArc([165.4499217,-50.6712764],{"radius":2,"clockwise":false,"large":false}).appendPoint([189.5172478,-50.6712764]).appendArc([191.5172478,-52.6712764],{"radius":2,"clockwise":true,"large":false}).appendPoint([191.5172477,-119.1712764]).appendPoint([191.5172477,-135.5631419]).appendArc([191.6415231,-136.2571571],{"radius":2,"clockwise":false,"large":false}).appendPoint([196.6269305,-149.7312901]).appendArc([196.4832567,-151.4253053],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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
            
            

                function r_compact_uplate_case_fn() {
                    

                // creating part 0 of case r_compact_uplate
                let r_compact_uplate__part_0 = compact_plate_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let r_compact_uplate__part_0_bounds = r_compact_uplate__part_0.getBounds();
                let r_compact_uplate__part_0_x = r_compact_uplate__part_0_bounds[0].x + (r_compact_uplate__part_0_bounds[1].x - r_compact_uplate__part_0_bounds[0].x) / 2
                let r_compact_uplate__part_0_y = r_compact_uplate__part_0_bounds[0].y + (r_compact_uplate__part_0_bounds[1].y - r_compact_uplate__part_0_bounds[0].y) / 2
                r_compact_uplate__part_0 = translate([-r_compact_uplate__part_0_x, -r_compact_uplate__part_0_y, 0], r_compact_uplate__part_0);
                r_compact_uplate__part_0 = rotate([0,0,0], r_compact_uplate__part_0);
                r_compact_uplate__part_0 = translate([r_compact_uplate__part_0_x, r_compact_uplate__part_0_y, 0], r_compact_uplate__part_0);

                r_compact_uplate__part_0 = translate([0,0,0], r_compact_uplate__part_0);
                let result = r_compact_uplate__part_0;
                
            

                // creating part 1 of case r_compact_uplate
                let r_compact_uplate__part_1 = r_screen_base_case_fn();

                // make sure that rotations are relative
                let r_compact_uplate__part_1_bounds = r_compact_uplate__part_1.getBounds();
                let r_compact_uplate__part_1_x = r_compact_uplate__part_1_bounds[0].x + (r_compact_uplate__part_1_bounds[1].x - r_compact_uplate__part_1_bounds[0].x) / 2
                let r_compact_uplate__part_1_y = r_compact_uplate__part_1_bounds[0].y + (r_compact_uplate__part_1_bounds[1].y - r_compact_uplate__part_1_bounds[0].y) / 2
                r_compact_uplate__part_1 = translate([-r_compact_uplate__part_1_x, -r_compact_uplate__part_1_y, 0], r_compact_uplate__part_1);
                r_compact_uplate__part_1 = rotate([0,0,0], r_compact_uplate__part_1);
                r_compact_uplate__part_1 = translate([r_compact_uplate__part_1_x, r_compact_uplate__part_1_y, 0], r_compact_uplate__part_1);

                r_compact_uplate__part_1 = translate([0,0,0], r_compact_uplate__part_1);
                result = result.union(r_compact_uplate__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return r_compact_uplate_case_fn();
            }

        