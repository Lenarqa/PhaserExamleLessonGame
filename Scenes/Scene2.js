class Scene2 extends Phaser.Scene{
    constructor(){
        super("Level2");
    }
    
    preload(){
        this.load.image('ten', 'assets/img/ten.png');
    }
    
    create(){
        var h = this.game.config.height;
        var w = this.game.config.width;
        //console.log(h + " " + w); 

      for (let i = 0; i < 20; i++) {
          var x = Phaser.Math.Between(0, w);
          var y = Phaser.Math.Between(0, h);

          var width = Phaser.Math.Between(10, 50);
          
          var cube = this.add.image(x, y, 'ten').setInteractive();
          cube.displayWidth = width;
          cube.scaleY = cube.scaleX;
          cube.on('pointerdown', function(){
              nextLvl.visible = true;
              nextLvl.z = 10;
          })
      }

      var btnX = this.game.config.width * 0.8;
      var btnY = this.game.config.height * 0.8;
      var nextLvl = this.add.text(btnX, btnY, "Next", {font:"30px Arial", fill:"yellow"}).setInteractive();
      nextLvl.visible = false;
      
      nextLvl.on('pointerdown', this.nextLVL.bind(this));
    }

    nextLVL(){
        this.scene.start('Level3');
    }
}