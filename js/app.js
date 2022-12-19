window.addEventListener('load', initScene)

const meteors = [
    { x: 0, y: 0, z: -30 },
    { x: 0, y: 0, z: 30 },
    { x: 30, y: 0, z: 0 },
    { x: -30, y: 0, z: 0 },
    { x: 20, y: 0, z: 20 },
    { x: 20, y: 0, z: -20 },
    { x: -20, y: 0, z: -20 },
    { x: -20, y: 0, z: 20 }
]

let meteor, score = 0

function initScene() {

    let orbits = document.querySelectorAll('.orbit')

    orbits.forEach(orbit => {

        meteors.forEach(pos => {

            meteor = document.createElement('a-entity')
            meteor.setAttribute('geometry', { primitive: 'sphere', radius: Math.random() * 3 + 0.5 })
            meteor.setAttribute('material', { shader: 'flat', src: '#meteor' })
            meteor.setAttribute('class', 'meteor')
            meteor.object3D.position.set(pos.x, pos.y, pos.z)

            meteor.setAttribute('shootable', '')

            orbit.appendChild(meteor)
        })
    })
}

AFRAME.registerComponent('shootable', {
    init: function () {
        var valorText = document.querySelector("#txt-score");
        this.el.addEventListener('click', () => {
            this.el.parentNode.removeChild(this.el)
            valorText.setAttribute('value', `${++score} meteoritos cazados`);
            
          //  const audio = new Audio("audios/audio_laser.mp3");
          //  audio.loop = true;
           // audio.controls = true;
           // audio.play();
            console.log(valorText);
        })
    }
})