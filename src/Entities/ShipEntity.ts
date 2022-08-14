import Phaser from 'phaser';

export default class ShipEntity extends Phaser.GameObjects.Container {
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private speed = 200;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        const sprite = scene.add.sprite(0, 0, 'ship').setOrigin(0.5, 0.5);

        // Add sprite as a child of the Entity container
        this.add(sprite);

        scene.physics.add.existing(this);
        const body = this.body as Phaser.Physics.Arcade.Body;
        body.setSize(sprite.width, sprite.height);
        body.setCollideWorldBounds(true);
        body.setOffset(sprite.width  * -0.5);

        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    create() {

    }

    preUpdate(t: number, dt: number) {
        const body = this.body as Phaser.Physics.Arcade.Body;
        let velocity = new Phaser.Math.Vector2();

        if (this.cursors.left?.isDown) velocity.x--;
        if (this.cursors.right?.isDown) velocity.x++;
        if (this.cursors.up?.isDown) velocity.y--;
        if (this.cursors.down?.isDown) velocity.y++;

        velocity.normalize();
        body.setVelocity(velocity.x * this.speed, velocity.y * this.speed);
    }
}