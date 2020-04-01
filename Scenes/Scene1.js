class Scene1 extends Phaser.Scene {

    constructor() {
        super("Level1");
        this.ten;
    }

    preload(){
        this.load.image('ten', 'assets/img/ten.png');
    }

    create(){
        //fast change lvl.
        this.scene.start('Level5');
        console.log(this.game.config.width);
        
        var score = this.add.text(150, 50, "Hello World", {font: '30px'});
        score.visible = false;

       this.button = this.add.sprite(200, 125,'ten').setInteractive();
       //this.button.setScale(4);
       this.button.displayWidth = 40;
       this.button.displayHeight = 40;
       this.button.on('pointerdown', function(){
                 //do things on click
                 if(score.visible == true){
                    score.visible = false;
                 }else{
                     score.visible = true;
                 }
       });

       this.ten = this.add.sprite(300, 125,'ten').setInteractive();
       this.ten.setScale(4);
       this.ten.on('pointerdown', this.invisibleTen.bind(this));
       //

       var btnX = this.game.config.width * 0.8;
       var btnY = this.game.config.height * 0.8;
       var nextLvLBtn = this.add.text(btnX, btnY, "Next", {font:"30px Arial", fill:"yellow"}).setInteractive();
       nextLvLBtn.on('pointerdown', this.nextLVL.bind(this));
       //nextLvLBtn.setText("nextLvl")
    }

    nextLVL(pointer)
    {
        this.scene.start('Level2');
    }

    invisibleTen(pointer){
        this.ten.visible = false;
    }

   
    update(){

    }

}