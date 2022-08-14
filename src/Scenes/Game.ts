import Phaser from 'phaser';
import { Scenes } from '@src/constants';
import ShipEntity from '@src/Entities/ShipEntity';

export default class Game extends Phaser.Scene {
    constructor() {
      super(Scenes.Game);
    }

    preload() {

    }

    create() {
        this.add.text(100, 100, 'Phaser Starter Project', {
            fontSize: '60px',
            fontFamily: "Helvetica",
        });

        const Ship = new ShipEntity(this, 400, 450);
        this.add.existing(Ship);
    }

    update() {

    }
}