          //Controls Statement
          controls = new function () {
            this.showAxisHelper = true;
            this.comesIntoMyHouse = false;
          };

          //Add Gui
          gui = new dat.GUI();
          axis_control = gui.add(controls, 'showAxisHelper');
          axis_control.onChange(function (value) {
           axisHelper.visible = value;
          });
          comesIntoMyHouse = gui.add(controls,'comesIntoMyHouse');
          comesIntoMyHouse.onChange(function (value) {
                  renderCamera = value ? inspectedCamera : camera;
          });
          

