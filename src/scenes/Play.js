class Play extends Phaser.Scene {
	constructor() {
		super("playScene")
	}

	preload() {
		this.load.image('playBackground', './assets/GachaJumpBackground.png')
		this.load.image('tutorialTip', './assets/uiSprites/tutorial_tip.png')
		this.load.image('pipe', 'assets/Pipe_Body.png');
		this.load.image('pipeEndUp', 'assets/Pipe_EntranceExit.png')
		this.load.image('pipeEndDown', 'assets/Pipe_EntranceExit_Upside_Down_.png')
		
		this.load.audio('jumpSFX', 'assets/sfx/wingFlap.wav')
		this.load.audio('deadSFX', 'assets/sfx/deadSound.wav')
		this.load.audio('rollUnlockedSFX', 'assets/sfx/rollUnlockedSound.wav')
		this.load.audio('scoredSFX', 'assets/sfx/scoredSound.wav')
		this.load.audio('backgroundMusic', './assets/sfx/treehouse-jeff-kaale-main-version-29078-01-43.mp3')
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
		this.backgroundMusic = this.sound.add('backgroundMusic', {
			volume: .5,
			loop: true
		})
		this.backgroundMusic.play()
		this.backgroundMoveSpeed = 1
		keyJUMP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		this.background = this.add.tileSprite(
			0,
			0,
			980,
			980,
			'playBackground')
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
					fontSize: 128, 
					fill: '#FFF',
					align: 'right',
					padding: {
						top: 5,
						bottom: 5,
						},
					width:'128px'
				}
			)

			this.tutorialTip = this.add.sprite(
				200,
				300,
				'tutorialTip'
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
		if (this.score == 1) {
			this.tutorialTip.destroy(true)
		}
	}

	endGame() {
		this.sound.play('deadSFX')
		this.backgroundMusic.stop()
		this.scene.start('menuScene');
	}

	addPoint() {
		if (!this.sensorGroup.hasScored) {
			this.score += 1
			this.scoreText.setText('Score: ' + this.score)
			this.sensorGroup.hasScored = true

			if (this.score % 5 == 0) {
				this.sound.play('rollUnlockedSFX')
			}
			else {
				this.sound.play('scoredSFX')
			}
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
