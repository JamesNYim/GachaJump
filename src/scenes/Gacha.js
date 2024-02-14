class Gacha extends Phaser.Scene {
	constructor() {
		super('gachaScene')
	}

	preload() {
		this.load.image('background', './assets/GachaJumpBackground.png')
	}

	create() {
		console.log("Gacha Scene")
		this.background = this.add.sprite(
			0,
			0,
			'background')
			.setOrigin(0, 0)
	}

	gachaRoll() {
		
	}
}