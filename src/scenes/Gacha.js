class Gacha extends Phaser.Scene {
	constructor() {
		super('gachaScene')
		
	}

	preload() {
		this.load.image('background', './assets/GachaJumpBackground.png')
		this.load.image('backButton', './assets/uiSprites/Back_Button.png')
		this.load.image('Purple_Bird', './assets/PalSprites/Purple_Bird.png')
		this.load.image('Green_Bird', './assets/PalSprites/Green_Bird.png')
		this.load.image('Chicken', './assets/PalSprites/Chicken.png')
	}

	create() {
		console.log("Gacha Scene")
		this.characters = [
			'Purple_Bird',
			'Green_Bird',
			'Chicken'
		]
		this.background = this.add.sprite(
			0,
			0,
			'background')
			.setOrigin(0, 0)

		this.backButton = this.add.image(
			100,
			50,
			'backButton'
		)
		this.backButton.setInteractive()
		this.backButton.on('pointerdown', () =>
			this.scene.start('menuScene'))
		
		this.gachaRoll()
	}

	gachaRoll() {
		console.log(this.characters)
		let index = Math.floor(Math.random() * this.characters.length)
		let characterRoll = this.characters[index]
		this.add.sprite(game.config.width / 4, game.config.height / 2,
			characterRoll	
		)
	}
}