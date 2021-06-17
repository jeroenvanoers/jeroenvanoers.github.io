export default class MainScene extends Phaser.Scene {
    constructor(){
        super("MainScene");
    }

    preload() {
        console.log("preload");
        this.load.image('tiles', 'assets/images/all tiles.png');
        this.load.tilemapTiledJSON('map', 'assets/images/custom_map.json');
    }

    create() {
        console.log("create");
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('all tiles', 'tiles',16,16,0,0);
        const layer1 = map.createStaticLayer('Tile Layer 1', tileset,0,0);
        const layer2 = map.createStaticLayer('Tile Layer 2', tileset,0,0);
    }

    update() {
        console.log("update");
    }
}