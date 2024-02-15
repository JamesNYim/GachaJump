class Obstacle extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture, frame, obstaclesGroup, sensorGroup, pipeEndUpTexture, pipeEndDownTexture, pipeMoveMult) {
		super(scene, x, y, texture, frame)
		this.scene = scene
		scene.physics.add.existing(this)
		scene.physics.world.enable(this);
		this.pipeTexture = texture
		this.pipeEndUpTexture = pipeEndUpTexture
		this.pipeEndDownTexture = pipeEndDownTexture
		this.obstaclesGroup = obstaclesGroup
		this.sensorGroup = sensorGroup
		this.pipeMult = pipeMoveMult
		this.spawnPipe()
		
	}
	
	spawnPipeSection(x, y, pipeTexture) {
		var pipe = this.scene.physics.add.sprite(x, y, pipeTexture)
		this.scene.physics.world.enable(pipe);
		this.obstaclesGroup.add(pipe)

		pipe.body.setVelocityX(-100 * this.pipeMult)
		pipe.checkWorldBounds = true  
		pipe.outOfBoundsKill = true
	}

	spawnDetectorSection(x, y) {
		var pipeSensor = this.scene.add.rectangle(x, y, 1, game.config.height)
		this.scene.physics.world.enable(pipeSensor)
		this.sensorGroup.add(pipeSensor);

		pipeSensor.body.setVelocityX(-100 * this.pipeMult)
		pipeSensor.checkWorldBounds = true  
		pipeSensor.outOfBoundsKill = true
		pipeSensor.hasScored = false
	}

	spawnPipe() {
		var hole = Math.floor(Math.random() * 10) + 1
		for (var i = 0; i < 20; ++i) {
			if (i == hole - 2) {
				this.spawnPipeSection(800, i * 50, this.pipeEndDownTexture)
			}
			else if (i == hole + 2) {
				this.spawnPipeSection(800, i * 50, this.pipeEndUpTexture)
			}
			else if (i != hole && i != hole + 1 && i != hole - 1) {
				this.spawnPipeSection(800, i * 50, this.pipeTexture)
			}
			
			
		}
		this.spawnDetectorSection(800, game.config.height / 2)
	}
}