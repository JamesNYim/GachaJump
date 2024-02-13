class Character extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture, frame, gravity, moveSpeed, jumpHeight) {
		super(scene, x, y, texture, frame)
		scene.physics.add.existing(this)
		scene.add.existing(this)
		scene.physics.world.enable(this);
		this.scene = scene
		this.moveSpeed = moveSpeed
		this.jumpHeight = jumpHeight
		this.gravity = gravity
		this.body.setGravityY(400)
		this.body.setCollideWorldBounds(true)
	}

	update() {	
		if (Phaser.Input.Keyboard.JustDown(keyJUMP)) {
			this.jump()
		}
	}

	jump() {
		//console.log('Jump!')
		this.scene.sound.play('jumpSFX')
		this.body.setVelocityY(-250)
	}
}