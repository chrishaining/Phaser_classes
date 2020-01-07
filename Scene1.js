class Scene1 extends Phaser.Scene {
    constructor() {
        super({key: 'Scene1'})
    }

    create() {
        this.add.text(300, 200, 'This is Scene1', {fill: '#000000', fontSize: '40px'});
        this.input.on('pointerdown', () => {
            this.scene.stop('Scene1');
            this.scene.start('Scene2')
            })
      }
}

