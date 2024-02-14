class Menu extends Phaser.Scene {
	constructor() {
		super("menuScene")
	}

	preload() {
		this.load.image('background', './assets/GachaJumpBackground.png')
		this.load.image('playButton', './assets/uiSprites/Play_Button.png')
		this.load.image('exitButton', './assets/uiSprites/Exit_Button.png')
		this.load.image('rollButton', './assets/uiSprites/Roll_Button.png')
	}

	create() {
		this.background = this.add.sprite(
			0,
			0,
			'background')
			.setOrigin(0, 0)
	
		this.playButton = this.add.image(
			400,
			100,
			'playButton'
		)

		this.rollButton = this.add.image(
			400,
			300,
			'rollButton'
		)

		this.exitButton = this.add.image(
			400,
			500,
			'exitButton'
		)
		this.playButton.setInteractive()
		this.playButton.on('pointerdown', () =>
			this.scene.start('playScene'))

		this.rollButton.setInteractive()
		this.rollButton.on('pointerdown', () =>
			this.scene.start('gachaScene'))

		this.exitButton.setInteractive()
		this.exitButton.on('pointerdown', () =>
			game.destroy(true, false))
	}
}