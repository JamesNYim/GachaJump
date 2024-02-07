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
			debug: true
		}
	},
	scene: [Play],
}

let game = new Phaser.Game(config);
let keyJUMP;