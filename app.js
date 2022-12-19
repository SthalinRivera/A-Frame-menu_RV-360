
//Componente para controllar audio
AFRAME.registerComponent('audiocontroller', {
init: function () { 
let controlbutton = this.el;
controlbutton.addEventListener('click', function (ev) {
let method = ev.srcElement.id;
let speaker = document.querySelector("#speaker");
if (method=="play") {
 speaker.components.sound.playSound();
 speaker.setAttribute('src', '#play');
console.log(method);
}
if (method=="stop") {
 speaker.components.sound.stopSound(); 
 speaker.setAttribute('src', '#pause');
}
});
},
});

//Componente para controllar videos
AFRAME.registerComponent('play-pause', {
init: function () { 
let myVideo = document.querySelector("#sufer");
let videoControls = document.querySelector("#videoControls");
this.el.addEventListener("click",function () {
 if (myVideo.paused) {
   console.log(myVideo);
   myVideo.play();
   videoControls.setAttribute('src', '#pause');
 }else {
   myVideo.pause();
   videoControls.setAttribute('src', '#play');
 }
});
}
});

// Component to change to a sequential color on click.
AFRAME.registerComponent('cursor-listener', {
init: function () {
var lastIndex = -1;
var COLORS = ['#F03907', '#07F071', '#0E5BF5'];
this.el.addEventListener('click', function (evt) {
lastIndex = (lastIndex + 1) % COLORS.length;
this.setAttribute('material', 'color', COLORS[lastIndex]);
console.log('I was clicked at: ', evt.detail.intersection.point);
});
}
});

// Component to change to a hover and scale.
AFRAME.registerComponent('cursor-scale-hover', {
  schema: {
    scale: {type: 'string'},
  },
  init: function () {
  this.el.addEventListener('mouseenter', function (evt) {
  this.setAttribute('scale', { x: 1.792, y: 1.1, z: 1.2});
  console.log('I was clicked at: ', evt.detail.intersection.point);
  console.log(evt.ata.scale);
  });
  this.el.addEventListener('mouseleave', function (evt) {
    this.setAttribute('scale', { x: 1.691, y: 0.99, z: 1.1 });
    });
  }
  });

// Component to change to a hover and color.
  AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {default: 'red'}
    },
    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;
      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });
      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });
