import MainScene from "./MainScene.js";

const config = {
    width: 940,
    height: 432,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'survival-game',
    scene: [MainScene],
    scale: {
        zoom: 2,
    },
    physiscs: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {y:0},
        }
    },
    plugins: {
        scene: [
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }
}

new Phaser.Game(config);