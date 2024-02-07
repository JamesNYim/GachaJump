class Play extends Phaser.Scene {
	constructor() {
		super("playScene")
	}

	preload() {
		var characterSpritePath = './assets/bird.png'
		this.load.image('cloudTest', './assets/CloudTest.png')
		this.load.image('characterSprite', characterSpritePath)
	}
	create() {
		this.backgroundMoveSpeed = 1
		keyJUMP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		this.cloudTest = this.add.tileSprite(
			0,
			0,
			980,
			980,
			'cloudTest')
			.setOrigin(0,0)
			
		this.character = new Character(
			this,
			game.config.width / 2,
			game.config.height / 2,
			'characterSprite',
			0,
			2,
			20,
			100)
			.setOrigin(0, 0)
		
			
		}
		
	update() {
		this.cloudTest.tilePositionX += this.character.moveSpeed / 2
		this.character.update()
	}
}
