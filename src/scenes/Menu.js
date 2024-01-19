class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
        console.log("Menu: constructor")
    }

    init() {
        console.log("Menu: init")
    }

    create() {
        console.log("Menu: create")
        
        this.add.text(20, 20, "Rocket Patrol Menu")
        
        // let playerStats = {
        //     HP: this.HP,
        //     EXP: this.EXP
        // }

        // this.scene.start("playScene", playerStats)
    }

}