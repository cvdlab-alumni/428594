function mkAllDoor(){ //cucina
    var door = new THREE.Object3D();
    var doorx = 0.5*x;
    var doory = 8*y;
    var doorz = 2*z;
    var imageDoor = 'image/internal_door.jpg';
    var position_kitchen = [7.75*x,0.55*y,-5.5*z]
    var position_dinningRoom = [7.75*x,0.55*y,-10*z]
    var position_beedRoom = [13.25*x,0.55*y,-5.5*z]
    var position_closet = [13.25*x,0.55*y,-10*z]
    var position_bathRoom = [13.25*x,0.55*y,-14.77*z]
    var rotation_door1 = [ 0, Math.PI/8, Math.PI/4, 3*Math.PI/8, Math.PI/2];
    var rotation_door2 = [ 0, -Math.PI/8, -Math.PI/4, -3*Math.PI/8, -Math.PI/2];
    var rotation_door3 = [ Math.PI/2, 5*Math.PI/8, 6*Math.PI/8, 7*Math.PI/8, Math.PI];


    var door_kitchen =  mkDoor(doorx, doory, doorz,imageDoor, position_kitchen);
     door_kitchen.door.interact = function() {
      if (door_kitchen.rotation.y == Math.PI/2 ) {
          initAnimatorClose(door_kitchen,rotation_door1);
      } else {
          initAnimatorOpen(door_kitchen,rotation_door1);
      }
   }
    var door_dinningRoom = mkDoor(doorx, doory, doorz,imageDoor, position_dinningRoom);
    door_dinningRoom.door.interact = function() {
      if (door_dinningRoom.rotation.y == Math.PI/2 ) {
          initAnimatorClose(door_dinningRoom,rotation_door1);
      } else {
          initAnimatorOpen(door_dinningRoom,rotation_door1);
      }
   }
    var door_beedRoom = mkDoor(doorx, doory, doorz,imageDoor, position_beedRoom);
    door_beedRoom.door.interact = function() {
      if (door_beedRoom.rotation.y == -Math.PI/2 ) {
          initAnimatorClose(door_beedRoom,rotation_door2);
      } else {
          initAnimatorOpen(door_beedRoom,rotation_door2);
      }
   }          
    var door_closet = mkDoor(doorx, doory, doorz,imageDoor, position_closet);
    door_closet.door.interact = function() {
      if (door_closet.rotation.y == -Math.PI/2 ) {
          initAnimatorClose(door_closet,rotation_door2);
      } else {
          initAnimatorOpen(door_closet,rotation_door2);
      }
   }          
    var door_bathRoom = mkDoor(doorx, doory, doorz,imageDoor, position_bathRoom);
    door_bathRoom.door.interact = function() {
      if (door_bathRoom.rotation.y == -Math.PI/2 ) {
          initAnimatorClose(door_bathRoom,rotation_door2);
      } else {
          initAnimatorOpen(door_bathRoom,rotation_door2);
      }
   }          

    var imageDoor = 'image/external_door.jpg';
    var position_input = [9.6*x,0.55*y,-15.75*z];
    var position_input1 = [8.6*x,0.55*y,-15.75*z];
    var position_input2 = [11.40*x,0.55*y,-15.75*z];

   var doorz = 1.8*z;
   var door_input = mkDoor(doorx, doory, doorz,imageDoor, position_input);
   door_input.rotation.y = Math.PI/2
    door_input.door.interact = function() {
      if (door_input.rotation.y == Math.PI ) {
          initAnimatorClose(door_input,rotation_door3);
      } else {
          initAnimatorOpen(door_input,rotation_door3);

      }
   } 

   var side_LR_z = 0.25*z;
   var side_LR_y = 8*y;
   var side_glass_z = 0.5*z;
   var side_glass_y = 7.5*y;
   var sideTop_z = 0.75*z;
   var sideTop_y = 0.25*y;
   var win_h = 8*y;
   var win_w = 1*z;
   var win_x = 0.5*x;
   var imageFile1 = 'image/wood.jpg';
   var imageFile2 = ['#00FFFF',true,0.5];
   var position = [[0,0,side_LR_z],
                   [0,0,side_glass_z+2*side_LR_z],
                   [0,win_h/2-sideTop_y/2,sideTop_z/2+side_LR_z],
                   [0,-win_h/2+sideTop_y/2,sideTop_z/2+side_LR_z],
                   [0,0,3*side_LR_z/2+side_glass_z/2]
                  ]


   var door_input1 = mkWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideTop_z,sideTop_y,win_h,win_w,win_x,imageFile1,imageFile2,position)
   door_input1.rotation.y = Math.PI/2;
   door_input1.position.set(8.5*x,4.55*y,-15.75*z);
   var door_input2 =  mkWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideTop_z,sideTop_y,win_h,win_w,win_x,imageFile1,imageFile2,position)
   door_input2.rotation.y = Math.PI/2
   door_input2.position.set(11.25*x,4.55*y,-15.75*z);

   door.add(door_kitchen);
   door.add(door_dinningRoom);
   door.add(door_beedRoom);
   door.add(door_closet);
   door.add(door_bathRoom);
   door.add(door_input);
   door.add(door_input1);
   door.add(door_input2);

   toIntersectObjects.push(door_kitchen.door);
   toIntersectObjects.push(door_dinningRoom.door);
   toIntersectObjects.push(door_beedRoom.door);
   toIntersectObjects.push(door_closet.door);
   toIntersectObjects.push(door_bathRoom.door);
   toIntersectObjects.push(door_input.door);

   return door;
}