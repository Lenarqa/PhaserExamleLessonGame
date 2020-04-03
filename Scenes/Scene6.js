class Scene6 extends Phaser.Scene{
    constructor(){
        super('Level6');
    }

    preload(){
        this.load.image('player', 'assets/img/worker.png');
        this.load.image('beer', 'assets/img/beer.png');
        this.load.image('table', 'assets/img/table.png');
    }

    create(){
        var h = this.game.config.height;
        var w = this.game.config.width;

        this.playerSpeed = 100;

        this.cameras.main.setBackgroundColor(0xbababa);

        
        this.cursorKey = this.input.keyboard.createCursorKeys();
        
        this.beer = this.physics.add.sprite(w * 0.5, h * 0.1, 'beer').setScale(1.2);
        this.table = this.physics.add.sprite(w * 0.5, h * 0.9, 'table');
        
        this.player = this.physics.add.sprite(w * 0.5, h * 0.5, 'player');
        this.player.setCollideWorldBounds();

        this.physics.add.overlap(this.player, this.beer, function(){
            this.beer.setActive(false);
            this.beer.setVisible(false);
            console.log("Вы взяли пиво");
        }, null, this);

        this.physics.add.overlap(this.player, this.table, function(){
            if(this.beer.setVisible(false)){
                this.beer.setVisible(true);
                this.beer.setActive(true);
                console.log('Вы продали пиво!');
            }
        }, null, this)

    }

    update(){
        this.movePlayerManager();
    }

    movePlayerManager(){
        if(this.cursorKey.left.isDown){
            this.player.setVelocityX(-this.playerSpeed);
        }else if(this.cursorKey.right.isDown){
            this.player.setVelocityX(this.playerSpeed);
        }else{
            this.player.setVelocityX(0);
        }

        if(this.cursorKey.up.isDown){
            this.player.setVelocityY(-this.playerSpeed);
        }else if(this.cursorKey.down.isDown){
            this.player.setVelocityY(this.playerSpeed);
        }else{
            this.player.setVelocityY(0);
        }
        
    }
}