import Phaser from 'phaser';
import { MenuScene } from '@src/Scenes/Menu';

const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'ExampleGame',
  url: 'https://github.com/digitsensitive/phaser3-typescript',
  version: '2.0',
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: 'app',
  scene: [MenuScene],
  input: {
    keyboard: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  backgroundColor: '#300000',
  render: { pixelArt: false, antialias: true },
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
