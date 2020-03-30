
class Scene3 extends Phaser.Scene{
    constructor(){
        super("Level3");
    }

    preload(){
        this.load.image('bullet', '/assets/img/bullet.png');
        this.load.image('box', '/assets/img/box.png');
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

        this.boxs = this.physics.add.group({
            key: 'box',
            repeat: 10,
            setXY:{ x: h*0.2, y: w*0.06, stepX: 40}
        });


        this.input.on('pointerdown', this.shoot, this);

        this.nextLvl = this.add.text(w * 0.8, h * 0.8, "Next", {font:"30px Arial", fill:"yellow"}).setInteractive();
        this.nextLvl.setVisible(false);
        this.nextLvl.on('ENTER', this.nextLVL, this);

        this.physics.add.collider(this.bullets, this.boxs, function(bullet, box){
            box.destroy();
            bullet.destroy();
        });

        this.mainSceneText = this.add.text(w * 0.15, h * 0.3, "Click to shoot! Kill all box!", {font:"30px Arial", fill:"yellow"});
    }

    update(){
        this.bullets.children.each(function(b){
            if(b.active){
                if(b.y < 0){
                    b.setActive(false);
                }
            }
        });

        if(this.boxs.countActive(true) == 10){
            this.mainSceneText.setVisible(false);
        }

        if(this.boxs.countActive(true) == 0){
            this.nextLvl.setVisible(true);
            //scene.input.keyboard.removeKey('pointerdown');
        }
    }

    shoot(pointer){
        var bullet = this.bullets.get(pointer.x, pointer.y);
        if(bullet){
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.body.velocity.y = -200;
        }
    }

    nextLVL(){
        this.game.start('Level4');
    }
}
