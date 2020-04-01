class Scene4 extends Phaser.Scene{
    constructor(){
        super('Level4');
    }

    init(){
        this.playerSpeed = 250;
        this.enemyMaxY = 220;
        this.enemyMinY = 30;
    }

    preload(){
        this.load.image('bg', 'assets/img/BgLevel4.png');
        this.load.image('player', 'assets/img/playerLevel4.png');
        this.load.image('book', 'assets/img/Book.png');
        this.load.image('bullet', 'assets/img/bullet.png');
    }

    create(){
        var h = this.game.config.height;
        var w = this.game.config.width;
        console.log(h,  w);

        this.bg = this.add.image(0,0, 'bg');
        this.bg.setOrigin(0,0);

        this.player = this.physics.add.sprite(w * 0.05, h * 0.5, 'player');
        this.player.setCollideWorldBounds(true);//player cant run from map

        this.book = this.add.image(w* 0.92, h * 0.5, 'book');
        this.bullets = this.physics.add.group({
            key: 'bullet',
            repeat: 4,
            setXY: {x: w * 0.15, y: h * 0.2, stepX: 80, stepY:20},
        });
    
        Phaser.Actions.ScaleXY(this.bullets.getChildren(), -0.5, -0.5);

        this.physics.add.collider(this.player, this.bullets, this.gameOver.bind(this));
       
        Phaser.Actions.Call(this.bullets.getChildren(), function(bullet){
            bullet.speed = Phaser.Math.Between(1, 3);
        }, this);
        //this.input.on('pointerdown', this.playerRun.bind(this));
    }

    update(){
        
        let enemy = this.bullets.getChildren();
        let numEnemy = enemy.length;

        
        for(var i = 0; i < numEnemy; i++){
            enemy[i].y += enemy[i].speed;

            if(enemy[i].y >= this.enemyMaxY && enemy[i].speed > 0){
                enemy[i].speed *= -1;
            }else if(enemy[i].y <= this.enemyMinY && enemy[i].speed < 0){
                enemy[i].speed *= -1;
            }
        }
        
        if(this.input.activePointer.isDown){
            this.player.x += 4;
        }


    }

    gameOver(){
        this.scene.restart();
    }
}

