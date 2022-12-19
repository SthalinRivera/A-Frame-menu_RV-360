AFRAME.registerComponent('change-sky', {
  schema: {
    img: { type: 'string' },
    zone: { type: 'string' }
  },

  init: function () {
    // Do something when component first attached.
    var data = this.data;
    var el = this.el;
    el.addEventListener("click", function () {
      var mySky = document.querySelector("#my-sky");
      mySky.setAttribute("src", data.img);
      console.log(data.img);

      var sphereMuseo = document.querySelector("#sphere-museo");
      var menuView = document.querySelector(".menu-view");
      var iconMenu = document.querySelector("#icon-menu-img");

      var txtFraile = document.querySelector("#txt-el-fraile");
      var meteorsSphere = document.querySelector("#meteorsSphere");
      var scoreGame= document.querySelector("#txt-score");
      if (data.img == "#sky-museo") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
        sphereMuseo.setAttribute("visible", true);
      } else {
        sphereMuseo.setAttribute("visible", false);
      }

      if (data.img == "#sky-muelle") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
       
      } else {
        sphereMuseo.setAttribute("visible", false);
      }
      if (data.img == "#sky-fraile") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
        txtFraile.setAttribute("visible", true);
        console.log(iconMenu);
      
      } else {
        sphereMuseo.setAttribute("visible", false);
        txtFraile.setAttribute("visible", false);
      }
      if (data.img == "#sky-juego") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
        meteorsSphere.setAttribute("visible", true);
        scoreGame.setAttribute("visible", true);
        console.log(iconMenu);
      
      } else {
        sphereMuseo.setAttribute("visible", false);
        txtFraile.setAttribute("visible", false);
        
        meteorsSphere.setAttribute("visible", false)
        scoreGame.setAttribute("visible", false);;
      }

    });
  },


});

