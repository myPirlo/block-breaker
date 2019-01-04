cc.Class({
    extends: cc.Component,

    properties: {
        resultLabel:cc.Label,
        scoreLabel:cc.Label,
    },

    // use this for initialization
    onLoad: function () {

    },

    init(gameCtl){
        this.gameCtl = gameCtl;
        this.node.active = false;
    },

    show(score,isWin){
        this.node.active = true;
        console.log(this.node)
        if(isWin){
            //this.resultLabel.string = '恭喜过关!';
            this.node.children[2].active=true
            this.node.children[4].active=true
            this.node.children[5].active=false
            this.node.children[2].x=-60
            this.node.children[3].x=60

        }else{
            //this.resultLabel.string = '哎呀,失败啦!';
            this.node.children[2].active=false
            this.node.children[3].x=0
            this.node.children[4].active=false
            this.node.children[5].active=true
        }
        this.scoreLabel.string = score+'';
    },
    onhide(){
        this.node.active=false
    },

    onBtnRestart(){
        this.gameCtl.startGame();
    }
});
