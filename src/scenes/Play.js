class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
        console.log("Play: constructor")
    }

    init(stats) {
        console.log("Play: init")
        
    }

    create() {
        console.log("Play: create")
        this.add.text(20, 20, "Rocket Patrol Play")
    }


}