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
		this.load.image('PalPrismEmpty', './assets/uiSprites/Pal_Prism_Empty.png')
		this.load.image('PalPrismFull', './assets/uiSprites/Pal_Prism_With_Pal.png')
		this.load.image('PalPrismOpen', './assets/uiSprites/Pal_Prism_Opened.png')
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
		
		this.palPrism = this.add.image(150, 450, this.displayPalPrism(1))
		this.palPrism.setInteractive()
		this.palPrism.on('pointerdown', () =>
			this.openPalPrism(1))
		//this.gachaRoll()
	}

	gachaRoll() {
		console.log(this.characters)
		let index = Math.floor(Math.random() * this.characters.length)
		let characterRoll = this.characters[index]
		this.add.sprite(150, 480, characterRoll)
	}

	displayPalPrism(rolls) {
		if (rolls < 0) {
			return 'PalPrismEmpty'
		}
		else {
			return 'PalPrismFull'
		}
	}

	openPalPrism(rolls) {
		if (rolls > 0) {
			this.palPrism.setTexture('PalPrismOpen')
			this.time.delayedCall(100, () => {
				this.gachaRoll()
			}, [], this)
			
		}
	}
}