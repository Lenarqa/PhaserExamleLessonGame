class Scene5 extends Phaser.Scene{
    constructor(){
        super("Level5");
    }

    preload(){
       this.load.image("money", "assets/img/money.png");
       this.load.image("ClickBonus", "assets/img/clickBonus.png");
    }

    create(){
        var h = this.game.config.height;
        var w = this.game.config.width;

        this.cameras.main.setBackgroundColor(0xbababa);

        this.cost = 10;
        this.costText = this.add.text(w*0.73, h*0.3, `Cost: ${this.cost}`, {font: "20px Arial", fill: "Black"});
        this.costText.visible = false;

        this.money = this.add.image(w * 0.45, h * 0.5, 'money').setInteractive();
        this.clickBonusImg = this.add.image(w * 0.8, h * 0.16, 'ClickBonus').setInteractive();
        this.clickBonusImg.visible = false;

        this.clickBonus = 1;
        this.score = 0; 
        this.scoreText = this.add.text(w * 0.30, h * 0.05, `Score: ${this.score}`, {font: "30px Arial", fill: "Black"});

        this.money.on('pointerdown', this.clickEvent, this);
        this.clickBonusImg.on('pointerdown', this.addBonus, this);
        
    }

    clickEvent(){
        this.score += this.clickBonus;
        
        if(this.score >= this.cost){
            this.clickBonusImg.visible = true;
            this.costText.visible = true;
        }

        this.scoreText.setText(`Score: ${this.score}`);
        
    }
    
    addBonus(){
        this.score -= this.cost;
        this.scoreText.setText(`Score: ${this.score}`);
        this.clickBonus *= 2;
        this.clickBonusImg.visible = false;
        this.costText.visible = false;
        
        if(this.money.scale < 3){
            this.money.setScale(this.money.scale + 1);
        }
        this.cost *= 3;
        
        this.costText.setText(`Cost:${this.cost}`);
    }
}
