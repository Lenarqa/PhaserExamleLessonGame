class Scene4 extends Phaser.Scene{
    constructor(){
        super('Level4');
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
            repeat: 5,
            setXY: {x: w * 0.15, y: h * 0.2, stepX: 60, stepY:20}
        });
        
        //this.input.on('pointerdown', this.playerRun.bind(this));
    }

    update(){
        if(this.input.activePointer.isDown){
            this.player.x += 4;
        }
    }
    playerRun(pointer){
        this.player.x += 200;
    }
}

