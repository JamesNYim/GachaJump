class Credits extends Phaser.Scene {
	constructor() {
		super('creditsScene')
	}

	preload() {
		this.load.image('creditsBackground', './assets/GachaJumpBackground.png')
		this.load.image('backButton', './assets/uiSprites/Back_Button.png')
		this.load.image('creditsInfo', './assets/uiSprites/CreditsInfo.png')
	}

	create() {
		this.add.image(
			0,
			0,
			'creditsBackground')
			.setOrigin(0, 0)
		
		this.add.image(
			0,
			0,
			'creditsInfo')
			.setOrigin(0, 0)

		this.backButton = this.add.image(
			100,
			50,
			'backButton'
		)
		this.backButton.setInteractive()
		this.backButton.on('pointerdown', () =>
			this.scene.start('menuScene'))
	}
}