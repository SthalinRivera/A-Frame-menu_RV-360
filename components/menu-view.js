AFRAME.registerComponent('menu-view', {

    init: function () {

      var el = this.el;
      el.addEventListener("click", function () {
        var menuView = document.querySelector(".menu-view")
          menuView.setAttribute("visible",true);

      });
    },
  
  
  });