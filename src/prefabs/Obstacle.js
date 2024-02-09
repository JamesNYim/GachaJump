class Obstacle extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture, frame)
		this.scene = scene
		scene.physics.add.existing(this)
		this.scene.add.existing(this)
		this.pipeTexture = texture
		this.spawnPipe()
		
	}

	create() {
		
	}
	
	spawnPipeSection(x, y) {
		console.log("spawned Pipe section")
		var pipe = this.scene.add.sprite(x, y, this.pipeTexture)
		this.scene.physics.world.enable(pipe);
		pipe.body.setVelocityX(-100)
		pipe.checkWorldBounds = true
		pipe.outOfBoundsKill = true
	}

	spawnPipe() {
		console.log("spawned pipe")
		var hole = Math.floor(Math.random() * 5) + 1
		for (var i = 0; i < 12; ++i) {
			if (i != hole && i != hole + 1) {
				this.spawnPipeSection(1000, i * 60 + 10)
			}
		}
	}
}