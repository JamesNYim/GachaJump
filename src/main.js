//See README.md for Creative Tilt//

let config = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.FIT,
		parent: 'phaser-example',
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 800,
		height: 600,
	},
	physics: {
		default: 'arcade',
		arcade: {
			debug: false
		}
	},
	scene: [Menu, Play, Gacha, Credits]
}

let game = new Phaser.Game(config);
let keyJUMP;