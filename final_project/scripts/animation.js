      function initAnimatorOpen(tar_obj, rot) {
        var animatorOpen = new KF.KeyFrameAnimator();
        animatorOpen.init({ 
          interps:
            [
              { 
                keys:[0, .25, .5, .75, 1], 
                values:[
                  { y : rot[0]},
                  { y : rot[1]},
                  { y : rot[2]},
                  { y : rot[3]},
                  { y : rot[4]},
                ],
                target: tar_obj.rotation
              },
              { 
                keys:[0, 0.5, 1], 
                values:[
                  { y:0},
                  { y:-Math.PI/8},
                  { y:0},
                ],
                target: tar_obj.handler2.rotation
              },
              { 
                keys:[0, 0.5, 1], 
                values:[
                  { y:0},
                  { y:Math.PI/8},
                  { y:0},
                ],
                target: tar_obj.handler1.rotation
              },
            ],
          loop: false,
          duration: 1000,
          easing: TWEEN.Easing.Linear.None
        });
        animatorOpen.start();
      }

      function initAnimatorClose(tar_obj, rot) {
          var animatorClose = new KF.KeyFrameAnimator();
          animatorClose.init({ 
          interps:
            [
              { 
                keys:[0, .25, .5, .75, 1], 
                values:[
                  { y : rot[4]},
                  { y : rot[3]},
                  { y : rot[2]},
                  { y : rot[1]},
                  { y : rot[0]},
                ],
                target: tar_obj.rotation
              },
              {
                keys:[0, 0.5, 1], 
                values:[
                  { y:0},
                  { y:-Math.PI/8},
                  { y:0},
                ],
                target: tar_obj.handler2.rotation
              },
              { 
                keys:[0, 0.5, 1], 
                values:[
                  { y:0},
                  { y:Math.PI/8},
                  { y:0},
                ],
                target: tar_obj.handler1.rotation
              },
            ],
          loop: false,
          duration: 1000,
          easing: TWEEN.Easing.Linear.None
        });
        animatorClose.start();
      }      

function initAnimatorOpenWin(tar_obj, rot) {
        var animatorOpen = new KF.KeyFrameAnimator();
        animatorOpen.init({ 
          interps:
            [
              { 
                keys:[0, .25, .5, .75, 1], 
                values:[
                  { y : rot[0]},
                  { y : rot[1]},
                  { y : rot[2]},
                  { y : rot[3]},
                  { y : rot[4]},
                ],
                target: tar_obj.rotation
              },
            ],
          loop: false,
          duration: 1000,
          easing: TWEEN.Easing.Linear.None
        });
        animatorOpen.start();
      }

            function initAnimatorCloseWin(tar_obj, rot) {
          var animatorClose = new KF.KeyFrameAnimator();
          animatorClose.init({ 
          interps:
            [
              { 
                keys:[0, .25, .5, .75, 1], 
                values:[
                  { y : rot[4]},
                  { y : rot[3]},
                  { y : rot[2]},
                  { y : rot[1]},
                  { y : rot[0]},
                ],
                target: tar_obj.rotation
              },
            ],
          loop: false,
          duration: 1000,
          easing: TWEEN.Easing.Linear.None
        });
        animatorClose.start();
      }      