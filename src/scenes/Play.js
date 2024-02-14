class Play extends Phaser.Scene {
	constructor() {
		super("playScene")
	}

	preload() {
		this.load.image('background', './assets/GachaJumpBackground.png')
		
		this.load.image('pipe', 'assets/Pipe_Body.png');
		this.load.image('pipeEndUp', 'assets/Pipe_EntranceExit.png')
		this.load.image('pipeEndDown', 'assets/Pipe_EntranceExit_Upside_Down_.png')
		this.load.audio('jumpSFX', 'assets/jump.wav')

		var PalSpritePath = './assets/PalSprites/Purple_Bird.png'
		this.load.image('characterSprite', PalSpritePath)
		this.load.spritesheet('PalAnimationSpritesheet', 
			'./assets/characterAnimations/Purple_Bird.png', 
			{
				frameWidth: 50,
				fameHeight: 50,
				startFrame: 0,
				endFrame: 1
		})
	}
	create() {

		this.backgroundMoveSpeed = 1
		keyJUMP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		this.background = this.add.tileSprite(
			0,
			0,
			980,
			980,
			'background')
			.setOrigin(0,0)
			
		this.character = new Character(
			this,
			game.config.width / 8,
			game.config.height / 2,
			'characterSprite',
			0,
			2,
			20,
			100,
			'PalAnimationSpritesheet')
			.setOrigin(0, 0)
 
			this.score = 0;
			this.scoreText = this.add.text(24, 
				24, 
				'score: 0', 
				{ font: 'arial', 
					fontSize: '128px', 
					fill: '#FFF',
					align: 'right',
					padding: {
						top: 5,
						bottom: 5,
						},
				}
			)


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
		this.background.tilePositionX += this.backgroundMoveSpeed
		this.character.update()
	}

	endGame() {
		this.scene.restart();
	}

	addPoint() {
		if (!this.sensorGroup.hasScored) {
			this.score += 1
			this.scoreText.setText('Score: ' + this.score)
			this.sensorGroup.hasScored = true
		}
		
		
	}

	createPipes() {
		//console.log("created pipes")
		let x = this.game.config.width
		let y = this.game.config.height * 2
		this.sensorGroup.hasScored = false
		let obstacle = new Obstacle(this, 
			x, y, 
			'pipe', 
			0, 
			this.obstacleGroup, 
			this.sensorGroup, 
			'pipeEndUp', 'pipeEndDown')
		
	}
}
