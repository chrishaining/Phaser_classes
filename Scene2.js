class Scene2 extends Phaser.Scene {
    constructor() {
        super({key: 'Scene2'})
    }

    create() {
        this.add.text(300, 300, 'This is Scene2', {fill: '#000000', fontSize: '40px'});
        this.input.on('pointerdown', () => {
            this.scene.stop('Scene2');
            this.scene.start('Scene1')
            })
    }
}