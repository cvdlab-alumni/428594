function mkAllWindow(){
//finestre 
          var side_LR_z = 0.25*z;
          var side_LR_y = 2*y;
          var win_x = 0.5*x; //profondità
          var side_glass_z = 1*z;
          var side_glass_y = 1.5*y;
          var sideTop_z = 1*z;
          var sideTop_y = 0.25*y;
          var sideButton_z = 1*z;
          var sideButton_y = 0.25*y;
          var win_h = 4*y;
          var win_w = 3*z;
          var imageFile1 = 'image/wood.jpg';
          var imageFile2 = ['#00FFFF',true,0.5];
          var position1 = [[0,side_LR_y/2,side_LR_z/2],
                          [0,side_LR_y/2,win_w/2-side_LR_z/2],
                          [0,sideTop_y/2,side_glass_z/2+side_LR_z],
                          [0,win_h/2-sideButton_y/2,sideButton_z/2+side_LR_z],
                          [0,side_glass_y/2+sideTop_y,side_glass_z/2+side_LR_z]];

           var position2 = [[0,side_LR_y/2,-side_LR_z/2],
                            [0,side_LR_y/2,-win_w/2+side_LR_z/2],
                            [0,sideTop_y/2,-side_glass_z/2-side_LR_z],
                            [0,win_h/2-sideButton_y/2,-sideButton_z/2-side_LR_z],
                            [0,side_glass_y/2+sideTop_y,-side_glass_z/2-side_LR_z]];
          var pos = [[0,win_h/2,-win_w],[0,win_h/2,0]];
          var position_obj = [[0,0,win_w/4],[0,0,-win_w/4]]
          
          var close_side_LR_z = 0.25*z;
          var close_side_LR_y = 4*y;
          var close_sideTop_z = 1*z;
          var close_sideTop_y = 0.25*y;
          var imageFile_ext = 'image/wood.jpg';
          var space = 0.2*y;
          var rip = 13;

         //posizione finestre per perno
          var position_ext1 = [
              [-win_x,close_side_LR_y/2,close_side_LR_z/2],
              [-win_x,close_side_LR_y/2,win_w/2-close_side_LR_z/2]
          ];
          var position_ext2 = [
              [-win_x,close_side_LR_y/2,-close_side_LR_z/2],
              [-win_x,close_side_LR_y/2,-win_w/2+close_side_LR_z/2]
          ];

          var pos_ext = [[0,0,0],[0,0,-win_w]];

          var rotation_win1 = [ 0, Math.PI/8, Math.PI/4, 3*Math.PI/8, Math.PI/2];
          var rotation_win2 = [ 0, -Math.PI/8, -Math.PI/4, -3*Math.PI/8, -Math.PI/2];

          var projector = new THREE.Projector();
          document.addEventListener('mousedown', onDocumentMouseDown, false);
          
          var windowC = new THREE.Object3D();

          var win_kitchen = completeWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,position_obj,pos,close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,imageFile_ext,position_ext1,position_ext2,pos_ext,space,rip);
         
         win_kitchen.int1.win.interact = function() {
            if (win_kitchen.int1.rotation.y == -Math.PI/2 ) {
                initAnimatorCloseWin(win_kitchen.int1,rotation_win2);
            } else {
                initAnimatorOpenWin(win_kitchen.int1,rotation_win2);
            }
         } 
         win_kitchen.int2.win.interact = function() {
             if (win_kitchen.int2.rotation.y == Math.PI/2 ) {
               initAnimatorCloseWin(win_kitchen.int2,rotation_win1);
            } else {
                initAnimatorOpenWin(win_kitchen.int2,rotation_win1);
            }
         } 
         /*
         win_kitchen.ext1.win.interact = function() {
            if (win_kitchen.ext1.rotation.y == -Math.PI/2 ) {
                win_kitchen.ext1.rotation.y = 0;
            } else {
                win_kitchen.ext1.rotation.y = -Math.PI/2;
            }
         } 
         win_kitchen.ext2.win.interact = function() {
             if (win_kitchen.ext2.rotation.y == Math.PI/2 ) {
                win_kitchen.ext2.rotation.y = 0;
            } else {
                win_kitchen.ext2.rotation.y = Math.PI/2;
            }
         } 
*/
         win_kitchen.position.set(0.25*x,3.5*y,-3*z);
        windowC.add(win_kitchen)
        
        var win_dinningRoom = completeWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,position_obj,pos,close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,imageFile_ext,position_ext1,position_ext2,pos_ext,space,rip);
         
          win_dinningRoom.int1.win.interact = function() {
            if (win_dinningRoom.int1.rotation.y == -Math.PI/2 ) {
                initAnimatorCloseWin(win_dinningRoom.int1,rotation_win2);
            } else {
                initAnimatorOpenWin(win_dinningRoom.int1,rotation_win2);
            }
         } 
         win_dinningRoom.int2.win.interact = function() {
             if (win_dinningRoom.int2.rotation.y == Math.PI/2 ) {
               initAnimatorCloseWin(win_dinningRoom.int2,rotation_win1);
            } else {
                initAnimatorOpenWin(win_dinningRoom.int2,rotation_win1);
            }
         } 
         /*
         win_dinningRoom.ext1.win.interact = function() {
            if (win_dinningRoom.ext1.rotation.y == -Math.PI/2 ) {
                win_dinningRoom.ext1.rotation.y = 0;
            } else {
                win_dinningRoom.ext1.rotation.y = -Math.PI/2;
            }
         } 
         win_dinningRoom.ext2.win.interact = function() {
             if (win_dinningRoom.ext2.rotation.y == Math.PI/2 ) {
                win_dinningRoom.ext2.rotation.y = 0;
            } else {
                win_dinningRoom.ext2.rotation.y = Math.PI/2;
            }
         } 
*/
         win_dinningRoom.position.set(0.25*x,3.5*y,-7.5*z);
        windowC.add(win_dinningRoom);
          var pos = [[-win_x/2,win_h/2,-win_w],[-win_x/2,win_h/2,0]];
        var win_kitchen2 = completeWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,position_obj,pos,close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,imageFile_ext,position_ext1,position_ext2,pos_ext,space,rip);
         
         win_kitchen2.int1.win.interact = function() {
            if (win_kitchen2.int1.rotation.y == -Math.PI/2 ) {
                initAnimatorCloseWin(win_kitchen2.int1,rotation_win2);
            } else {
                initAnimatorOpenWin(win_kitchen2.int1,rotation_win2);
            }
         } 
         win_kitchen2.int2.win.interact = function() {
             if (win_kitchen2.int2.rotation.y == Math.PI/2 ) {
               initAnimatorCloseWin(win_kitchen2.int2,rotation_win1);
            } else {
                initAnimatorOpenWin(win_kitchen2.int2,rotation_win1);
            }
         } 
         /*
         win_kitchen2.ext1.win.interact = function() {
            if (win_kitchen2.ext1.rotation.y == -Math.PI/2 ) {
                win_kitchen2.ext1.rotation.y = 0;
            } else {
                win_kitchen2.ext1.rotation.y = -Math.PI/2;
            }
         } 
         win_kitchen2.ext2.win.interact = function() {
             if (win_kitchen2.ext2.rotation.y == Math.PI/2 ) {
                win_kitchen2.ext2.rotation.y = 0;
            } else {
                win_kitchen2.ext2.rotation.y = Math.PI/2;
            }
         } 
*/
        win_kitchen2.rotation.y = Math.PI/2;
        win_kitchen2.position.set(5.5*x,3.5*y,-0.5*z);
        windowC.add(win_kitchen2);

          var pos = [[-win_x/2,win_h/2,-win_w],[-win_x/2,win_h/2,0]];
        var win_beedroom = completeWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,position_obj,pos,close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,imageFile_ext,position_ext1,position_ext2,pos_ext,space,rip);
         
         win_beedroom.int1.win.interact = function() {
            if (win_beedroom.int1.rotation.y == -Math.PI/2 ) {
                initAnimatorCloseWin(win_beedroom.int1,rotation_win2);
            } else {
                initAnimatorOpenWin(win_beedroom.int1,rotation_win2);
            }
         } 
         win_beedroom.int2.win.interact = function() {
             if (win_beedroom.int2.rotation.y == Math.PI/2 ) {
               initAnimatorCloseWin(win_beedroom.int2,rotation_win1);
            } else {
                initAnimatorOpenWin(win_beedroom.int2,rotation_win1);
            }
         } 
         /*
         win_beedroom.ext1.win.interact = function() {
            if (win_beedroom.ext1.rotation.y == -Math.PI/2 ) {
                win_beedroom.ext1.rotation.y = 0;
            } else {
                win_beedroom.ext1.rotation.y = -Math.PI/2;
            }
         } 
         win_beedroom.ext2.win.interact = function() {
             if (win_beedroom.ext2.rotation.y == Math.PI/2 ) {
                win_beedroom.ext2.rotation.y = 0;
            } else {
                win_beedroom.ext2.rotation.y = Math.PI/2;
            }
         } 
*/
        win_beedroom.rotation.y = Math.PI/2;
        win_beedroom.position.set(18.5*x,3.5*y,-3*z);
        windowC.add(win_beedroom);

        var win_bathroom = completeWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,position_obj,pos,close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,imageFile_ext,position_ext1,position_ext2,pos_ext,space,rip);
         
        win_bathroom.int1.win.interact = function() {
            if (win_bathroom.int1.rotation.y == -Math.PI/2 ) {
                initAnimatorCloseWin(win_bathroom.int1,rotation_win2);
            } else {
                initAnimatorOpenWin(win_bathroom.int1,rotation_win2);
            }
         } 
         win_bathroom.int2.win.interact = function() {
             if (win_bathroom.int2.rotation.y == Math.PI/2 ) {
               initAnimatorCloseWin(win_bathroom.int2,rotation_win1);
            } else {
                initAnimatorOpenWin(win_bathroom.int2,rotation_win1);
            }
         } 
         /*
         win_bathroom.ext1.win.interact = function() {
            if (win_bathroom.ext1.rotation.y == -Math.PI/2 ) {
                win_bathroom.ext1.rotation.y = 0;
            } else {
                win_bathroom.ext1.rotation.y = -Math.PI/2;
            }
         } 
         win_bathroom.ext2.win.interact = function() {
             if (win_bathroom.ext2.rotation.y == Math.PI/2 ) {
                win_bathroom.ext2.rotation.y = 0;
            } else {
                win_bathroom.ext2.rotation.y = Math.PI/2;
            }
         } 
*/
        win_bathroom.rotation.y = -Math.PI/2;
        win_bathroom.position.set(15.5*x,3.5*y,-15.5*z);
        windowC.add(win_bathroom);

        //finestra corridoio piccola
          var side_LR_z = 0.2*z;
          var side_LR_y = 2*y;
          var win_x = 0.5*x; //profondità
          var side_glass_z = 0.9*z;
          var side_glass_y = 1.6*y;
          var sideTop_z = 0.9*z;
          var sideTop_y = 0.2*y;
          var sideButton_z = 0.9*z;
          var sideButton_y = 0.2*y;
          var win_h = 4*y;
          var win_w = 2.6*z;
          
          var close_side_LR_z = 0.2*z;
          var close_side_LR_y = 4*y;
          var close_sideTop_z = 1.3*z;
          var close_sideTop_y = 0.25*y;

          //NON TOCCARE
          var imageFile1 = 'image/wood.jpg';
          var imageFile2 = ['#00FFFF',true,0.5];
          var position1 = [[0,side_LR_y/2,side_LR_z/2],
                          [0,side_LR_y/2,win_w/2-side_LR_z/2],
                          [0,sideTop_y/2,side_glass_z/2+side_LR_z],
                          [0,win_h/2-sideButton_y/2,sideButton_z/2+side_LR_z],
                          [0,side_glass_y/2+sideTop_y,side_glass_z/2+side_LR_z]];

           var position2 = [[0,side_LR_y/2,-side_LR_z/2],
                            [0,side_LR_y/2,-win_w/2+side_LR_z/2],
                            [0,sideTop_y/2,-side_glass_z/2-side_LR_z],
                            [0,win_h/2-sideButton_y/2,-sideButton_z/2-side_LR_z],
                            [0,side_glass_y/2+sideTop_y,-side_glass_z/2-side_LR_z]];
          var pos = [[0,win_h/2,-win_w-side_LR_z],[0,win_h/2,-side_LR_z]];
          var position_obj = [[0,0,win_w/4],[0,0,-win_w/4]];
          



         var win_corridor = completeWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,position_obj,pos,close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,imageFile_ext,position_ext1,position_ext2,pos_ext,space,rip,space);
         
        win_corridor.int1.win.interact = function() {
            if (win_corridor.int1.rotation.y == -Math.PI/2 ) {
                initAnimatorCloseWin(win_corridor.int1,rotation_win2);
            } else {
                initAnimatorOpenWin(win_corridor.int1,rotation_win2);
            }
         } 
         win_corridor.int2.win.interact = function() {
             if (win_corridor.int2.rotation.y == Math.PI/2 ) {
               initAnimatorCloseWin(win_corridor.int2,rotation_win1);
            } else {
                initAnimatorOpenWin(win_corridor.int2,rotation_win1);
            }
         } 
         /*
         win_corridor.ext1.win.interact = function() {
            if (win_corridor.ext1.rotation.y == -Math.PI/2 ) {
                win_corridor.ext1.rotation.y = 0;
            } else {
                win_corridor.ext1.rotation.y = -Math.PI/2;
            }
         } 
         win_corridor.ext2.win.interact = function() {
             if (win_corridor.ext2.rotation.y == Math.PI/2 ) {
                win_corridor.ext2.rotation.y = 0;
            } else {
                win_corridor.ext2.rotation.y = Math.PI/2;
            }
         } 
         */
        win_corridor.position.set(7.75*x,3.5*y,-12*z);
       windowC.add(win_corridor);

       //porta finestra salone
        var side_LR_z = 0.25*z;
        var side_LR_y = 4*y;
        var win_x = 0.5*x; //profondità
        var side_glass_z = 1*z;
        var side_glass_y = 3.5*y;
        var sideTop_z = 1*z;
        var sideTop_y = 0.25*y;
        var sideButton_z = 1*z;
        var sideButton_y = 0.25*y;
        var win_h = 8*y;
        var win_w = 3*z;
      
        var position1 = [[0,side_LR_y/2,side_LR_z/2],
                          [0,side_LR_y/2,win_w/2-side_LR_z/2],
                          [0,sideTop_y/2,side_glass_z/2+side_LR_z],
                          [0,win_h/2-sideButton_y/2,sideButton_z/2+side_LR_z],
                          [0,side_glass_y/2+sideTop_y,side_glass_z/2+side_LR_z]];

        var position2 = [[0,side_LR_y/2,-side_LR_z/2],
                            [0,side_LR_y/2,-win_w/2+side_LR_z/2],
                            [0,sideTop_y/2,-side_glass_z/2-side_LR_z],
                            [0,win_h/2-sideButton_y/2,-sideButton_z/2-side_LR_z],
                            [0,side_glass_y/2+sideTop_y,-side_glass_z/2-side_LR_z]];
        var pos = [[-win_x/2,win_h/2,-win_w],[-win_x/2,win_h/2,0]];
        var position_obj = [[0,0,win_w/4],[0,0,-win_w/4]];
       
        var close_side_LR_z = 0.25*z;
        var close_side_LR_y = 8*y;
        var close_sideTop_z = 1*z;
        var close_sideTop_y = 0.25*y;
        var imageFile_ext = 'image/wood.jpg';
        var space = 0.25*y;
        var rip = 22;
 
        var position_ext1 = [
                            [-win_x,close_side_LR_y/2,close_side_LR_z/2],
                            [-win_x,close_side_LR_y/2,win_w/2-close_side_LR_z/2]
                            ];
        var position_ext2 = [
                            [-win_x,close_side_LR_y/2,-close_side_LR_z/2],
                            [-win_x,close_side_LR_y/2,-win_w/2+close_side_LR_z/2]
                            ];
         var win_dinningroom2 = completeWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,position_obj,pos,close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,imageFile_ext,position_ext1,position_ext2,pos_ext,space,rip);
         
          win_dinningroom2.int1.win.interact = function() {
            if (win_dinningroom2.int1.rotation.y == -Math.PI/2 ) {
                initAnimatorCloseWin(win_dinningroom2.int1,rotation_win2);
            } else {
                initAnimatorOpenWin(win_dinningroom2.int1,rotation_win2);
            }
         } 
         win_dinningroom2.int2.win.interact = function() {
             if (win_dinningroom2.int2.rotation.y == Math.PI/2 ) {
               initAnimatorCloseWin(win_dinningroom2.int2,rotation_win1);
            } else {
                initAnimatorOpenWin(win_dinningroom2.int2,rotation_win1);
            }
         } 
         /*
         win_dinningroom2.ext1.win.interact = function() {
            if (win_dinningroom2.ext1.rotation.y == -Math.PI/2 ) {
                win_dinningroom2.ext1.rotation.y = 0;
            } else {
                win_dinningroom2.ext1.rotation.y = -Math.PI/2;
            }
         } 
         win_dinningroom2.ext2.win.interact = function() {
             if (win_dinningroom2.ext2.rotation.y == Math.PI/2 ) {
                win_dinningroom2.ext2.rotation.y = 0;
            } else {
                win_dinningroom2.ext2.rotation.y = Math.PI/2;
            }
         } 
         */
         win_dinningroom2.rotation.y = -Math.PI/2
        win_dinningroom2.position.set(2.5*x,0.5*y,-11*z);
       windowC.add(win_dinningroom2);

       //porta finestra corridoio
        //porta finestra salone
        var side_LR_z = 0.25*z;
        var side_LR_y = 4*y;
        var win_x = 0.5*x; //profondità
        var side_glass_z = 1.5*z;
        var side_glass_y = 3.5*y;
        var sideTop_z = 2*z;
        var sideTop_y = 0.25*y;
        var sideButton_z = 1.5*z;
        var sideButton_y = 0.25*y;
        var win_h = 8*y;
        var win_w = 4*z;
      
        var position1 = [[0,side_LR_y/2,side_LR_z/2],
                          [0,side_LR_y/2,win_w/2-side_LR_z/2],
                          [0,sideTop_y/2,side_glass_z/2+side_LR_z],
                          [0,win_h/2-sideButton_y/2,sideButton_z/2+side_LR_z],
                          [0,side_glass_y/2+sideTop_y,side_glass_z/2+side_LR_z]];

        var position2 = [[0,side_LR_y/2,-side_LR_z/2],
                            [0,side_LR_y/2,-win_w/2+side_LR_z/2],
                            [0,sideTop_y/2,-side_glass_z/2-side_LR_z],
                            [0,win_h/2-sideButton_y/2,-sideButton_z/2-side_LR_z],
                            [0,side_glass_y/2+sideTop_y,-side_glass_z/2-side_LR_z]];
        var pos = [[-win_x/2,win_h/2,-win_w],[-win_x/2,win_h/2,0]];
        var position_obj = [[0,0,win_w/4],[0,0,-win_w/4]]
       
        var close_side_LR_z = 0.25*z;
        var close_side_LR_y = 8*y;
        var close_sideTop_z = 1.5*z;
        var close_sideTop_y = 0.25*y;
        var imageFile_ext = 'image/wood.jpg';
        var space = 0.25*y;
        var rip = 22;
 
        var position_ext1 = [
                            [-win_x,close_side_LR_y/2,close_side_LR_z/2],
                            [-win_x,close_side_LR_y/2,win_w/2-close_side_LR_z/2]
                            ];
        var position_ext2 = [
                            [-win_x,close_side_LR_y/2,-close_side_LR_z/2],
                            [-win_x,close_side_LR_y/2,-win_w/2+close_side_LR_z/2]
                            ];

        var pos_ext = [[0,0,0],[0,0,-win_w]];
        var win_corridor2 = completeWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,position_obj,pos,close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,imageFile_ext,position_ext1,position_ext2,pos_ext,space,rip);
         
        win_corridor2.int1.win.interact = function() {
            if (win_corridor2.int1.rotation.y == -Math.PI/2 ) {
                initAnimatorCloseWin(win_corridor2.int1,rotation_win2);
            } else {
                initAnimatorOpenWin(win_corridor2.int1,rotation_win2);
            }
         } 
         win_corridor2.int2.win.interact = function() {
             if (win_corridor2.int2.rotation.y == Math.PI/2 ) {
               initAnimatorCloseWin(win_corridor2.int2,rotation_win1);
            } else {
                initAnimatorOpenWin(win_corridor2.int2,rotation_win1);
            }
         } 
         /*
        win_corridor2.ext1.win.interact = function() {
            if (win_corridor2.ext1.rotation.y == -Math.PI/2 ) {
                win_corridor2.ext1.rotation.y = 0;
            } else {
                win_corridor2.ext1.rotation.y = -Math.PI/2;
            }
         } 
        win_corridor2.ext2.win.interact = function() {
             if (win_corridor2.ext2.rotation.y == Math.PI/2 ) {
                win_corridor2.ext2.rotation.y = 0;
            } else {
                win_corridor2.ext2.rotation.y = Math.PI/2;
            }
         } 
         */
        win_corridor2.rotation.y = Math.PI/2;
        win_corridor2.position.set(12.5*x,0.5*y,-3*z);
        windowC.add(win_corridor2);

        //piccola finestra magazzino
        var side_LR_z = 0.25*z;
        var side_LR_y = 1.8*y;
        var side_glass_z = 2.5*z;
        var side_glass_y = 1.2*y;
        var sideTop_z = 2.5*z;
        var sideTop_y = 0.25*y;
        var win_h = 1.8*y;
        var win_w = 2.5*z;
        var win_x = 0.5*x;
        var imageFile1 = 'image/wood.jpg';
        var imageFile2 = ['#00FFFF',true,0.5];
        var position = [[0,0,0],[0,0,win_w+side_LR_z],[0,win_h/2-sideTop_y/2,sideTop_z/2+side_LR_z/2],[0,-sideTop_y/2-side_glass_y/2,sideTop_z/2+side_LR_z/2],[0,0,side_glass_z/2+side_LR_z/2]];

        var win_closet = mkWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideTop_z,sideTop_y,win_h,win_w,win_x,imageFile1,imageFile2,position);

        win_closet.position.set(20.75*x,9.2*y,-10.35*z);
        windowC.add(win_closet);


   toIntersectObjects.push(win_kitchen.int1.win);
   toIntersectObjects.push(win_kitchen.int2.win);
   toIntersectObjects.push(win_kitchen2.int1.win);
   toIntersectObjects.push(win_kitchen2.int2.win);
   toIntersectObjects.push(win_beedroom.int1.win);
   toIntersectObjects.push(win_beedroom.int2.win);
   toIntersectObjects.push(win_bathroom.int1.win);
   toIntersectObjects.push(win_bathroom.int2.win);
   toIntersectObjects.push(win_corridor.int1.win);
   toIntersectObjects.push(win_corridor.int2.win);
   toIntersectObjects.push(win_corridor2.int1.win);
   toIntersectObjects.push(win_corridor2.int2.win);
   toIntersectObjects.push(win_dinningRoom.int1.win);
   toIntersectObjects.push(win_dinningRoom.int2.win);
   toIntersectObjects.push(win_dinningroom2.int1.win);
   toIntersectObjects.push(win_dinningroom2.int2.win);
        return windowC;
    }