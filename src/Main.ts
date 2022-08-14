import Phaser from 'phaser';
import PreloadScene from '@src/Scenes/Preload';
import GameScene from '@src/Scenes/Game';

const GameConfig: Phaser.Types.Core.GameConfig = {
    title: 'ExampleGame',
    version: '1.0',
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'app',
    scene: [PreloadScene, GameScene],
    input: {
        keyboard: true
    },
    physics: {
        default: 'arcade',
        arcade: {
        gravity: { y: 0 },
        debug: true
        }
    },
    backgroundColor: '#663399',
    render: { pixelArt: true, antialias: false },
    scale: {
        mode: Phaser.Scale.ScaleModes.NONE
    },
};


export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

window.addEventListener('load', () => {
    (window as any)._game = new Game(GameConfig);
});
