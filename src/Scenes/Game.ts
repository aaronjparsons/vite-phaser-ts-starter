import Phaser from 'phaser';
import { Scenes } from '@src/constants';

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
    }

    update() {

    }
}