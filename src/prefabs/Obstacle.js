class Obstacle extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture, frame, obstaclesGroup, sensorGroup) {
		super(scene, x, y, texture, frame)
		this.scene = scene
		scene.physics.add.existing(this)
		scene.physics.world.enable(this);
		this.pipeTexture = texture
		this.obstaclesGroup = obstaclesGroup
		this.sensorGroup = sensorGroup
		this.spawnPipe()
		
	}
	
	spawnPipeSection(x, y) {
		console.log("spawned Pipe section")
		var pipe = this.scene.physics.add.sprite(x, y, this.pipeTexture)
		this.scene.physics.world.enable(pipe);
		this.obstaclesGroup.add(pipe)

		pipe.body.setVelocityX(-100)
		pipe.checkWorldBounds = true  
		pipe.outOfBoundsKill = true
	}

	spawnDetectorSection(x, y) {
		var pipeSensor = this.scene.add.rectangle(x + 50, y, 1, game.config.height)
		this.scene.physics.world.enable(pipeSensor)
		//this.scene.physics.add.existing(pipeSensor, true);
		this.sensorGroup.add(pipeSensor);

		pipeSensor.body.setVelocityX(-100)
		pipeSensor.checkWorldBounds = true  
		pipeSensor.outOfBoundsKill = true
		pipeSensor.hasScored = false
		console.log("Spawned detector")
	}

	spawnPipe() {
		//console.log("spawned pipe")
		var hole = Math.floor(Math.random() * 6) + 1
		for (var i = 0; i < 11; ++i) {
			if (i != hole && i != hole + 1 && i != hole - 1) {
				this.spawnPipeSection(800, i * 60 + 24)
			}	
		}
		this.spawnDetectorSection(800, game.config.height / 2)
	}
}