const gameState = {}

const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 500,
    backgroundColor: "b9eaff",
    scene: [Scene1, Scene2]
}

const game = new Phaser.Game(config)