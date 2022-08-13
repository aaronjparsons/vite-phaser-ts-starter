import Phaser from 'phaser';
import { Scenes } from '@src/constants';

export default class Preload extends Phaser.Scene {
    constructor() {
        super(Scenes.Preload);
    }

    preload() {

    }

    create() {
        this.scene.start(Scenes.Game);
    }
}