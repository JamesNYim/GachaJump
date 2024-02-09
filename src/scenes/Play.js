class Play extends Phaser.Scene {
	constructor() {
		super("playScene")
	}

	preload() {
		var characterSpritePath = './assets/bird.png'
		this.load.image('cloudTest', './assets/CloudTest.png')
		this.load.image('characterSprite', characterSpritePath)
		this.load.image('pipe', 'assets/pipe.png');
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
			game.config.width / 8,
			game.config.height / 2,
			'characterSprite',
			0,
			2,
			20,
			100)
			.setOrigin(0, 0)

			
		this.gameTimer = this.time.addEvent({
			delay: 5000,
			callback: this.createPipes,
			callbackScope: this,
			loop: true
		})

		this.obstacles = this.physics.add.group()

	}
		
	update() { 
		this.cloudTest.tilePositionX += this.character.moveSpeed / 2
		this.character.update()
	}

	createPipes() {
		console.log("created pipes")
		let x = this.game.config.width
		let y = this.game.config.height * 2

		let obstacle = new Obstacle(this, x, y, 'pipe')
		this.obstacles.add(obstacle)
	}
}
