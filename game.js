var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;

var config = {
    width: 500,
    height: 250,
    scene: [Scene1, Scene2, Scene3],
    pixelArt: true, 
    physics: {
        default: "arcade",
        arcade:{
            debug:false
        }
    }
}

window.onload = function(){
    var game = new Phaser.Game(config);
}