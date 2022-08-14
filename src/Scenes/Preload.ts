import Phaser from 'phaser';
import { Scenes } from '@src/constants';
import ship from '@assets/art/ship.png';

export default class Preload extends Phaser.Scene {
    constructor() {
        super(Scenes.Preload);
    }

    preload() {
        this.load.image('ship', ship);
    }

    create() {
        this.scene.start(Scenes.Game);
    }
}