function mkBalcony() {       
    var balcony = new THREE.Object3D();
    var balcony1_floor_x = 12.5*x;
    var balcony1_floor_y = 2*z;
    var balcony1_floor_def = 20;
    var balcony1_floor_rotation = [-Math.PI/2,0,0];
    var balcony1_floor_position = [14.25*x,0.55*y,-1.5*z];
    var balcony2_floor_x = 7.5*x;
    var balcony2_floor_y = 4*z;
    var balcony2_floor_position = [4*x,0.55*y,-13.5*z];
    var balcony1_floor_image = 'image/balcony.jpg';
    var balcony1_floor_bump = 'image/balcony_bump.jpg';
    var r = 4;

    var balcony1_floor = new mkPlane(balcony1_floor_x,balcony1_floor_y, balcony1_floor_def, balcony1_floor_def,balcony1_floor_rotation, balcony1_floor_position, balcony1_floor_image,balcony1_floor_bump, r);
    balcony.add(balcony1_floor);

    var balcony2_floor = new mkPlane(balcony2_floor_x,balcony2_floor_y, balcony1_floor_def, balcony1_floor_def,balcony1_floor_rotation, balcony2_floor_position, balcony1_floor_image,balcony1_floor_bump, r);
    balcony.add(balcony2_floor);

    return balcony;
}