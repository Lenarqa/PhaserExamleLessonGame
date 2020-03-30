
class Scene3 extends Phaser.Scene{
    constructor(){
        super("Level3");
    }

    preload(){
        this.load.image('bullet', '/assets/img/bullet.png')
    }

    create(){
        this.cameras.main.setBackgroundColor(0xbababa);//change BG
        
        var h = this.game.config.height;
        var w = this.game.config.width;
        //console.log("h = " + h + "w = " + w);

        // //this.add.image(w * 0.5, h * 0.5, 'bullet');
        this.bullets = this.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 10
        });

        this.input.on('pointerdown', this.shoot, this);

        var nextLvl = this.add.text(w * 0.8, h*0.8, "Next", {font:"30px Arial", fill:"yellow"}).setInteractive();
    }

    shoot(pointer){
        var bullet = this.bullets.get(pointer.x, pointer.y);
        if(bullet){
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.setVelocity.y = -200;
        }
    }
}
