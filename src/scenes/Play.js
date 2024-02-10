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
		this.score = 0;
		this.scoreText = this.add.text(24, 
			24, 
			'score: 0', 
			{font: 'Arial', fontSize: '32px', fill: '#FFF'})

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
			delay: 4000,
			callback: this.createPipes,
			callbackScope: this,
			loop: true
		})
		this.obstacleGroup = this.physics.add.group()
		this.sensorGroup = this.add.group()
		this.physics.add.collider(this.character, this.obstacleGroup, this.endGame, null, this);
		this.physics.add.overlap(this.character, this.sensorGroup, this.addPoint, null, this);
	}
		
	update() { 
		this.cloudTest.tilePositionX += this.backgroundMoveSpeed
		this.character.update()
	}

	endGame() {
		console.log("end game")
		this.scene.restart();
	}

	addPoint() {
		if (!this.sensorGroup.hasScored) {
			this.score += 1
			this.scoreText.setText('Score: ' + this.score)
			this.sensorGroup.hasScored = true
			console.log("Scored ")
		}
		
		
	}

	createPipes() {
		//console.log("created pipes")
		let x = this.game.config.width
		let y = this.game.config.height * 2
		this.sensorGroup.hasScored = false
		let obstacle = new Obstacle(this, x, y, 'pipe', 0, this.obstacleGroup, this.sensorGroup)
		
	}
}
