class Character extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture, frame, gravity, moveSpeed, jumpHeight, characterSprites) {
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

		this.flapAnimation = this.scene.anims.create({
			key: 'characterFlap',
			frames: this.anims.generateFrameNumbers(characterSprites, {
				frames: [2, 3, 3, 3, 2],
				frameRate: 2 
		})
	})
}

	update() {	
		if (Phaser.Input.Keyboard.JustDown(keyJUMP)) {
			this.jump()
		}
	}

	jump() {
		//console.log('Jump!')
		//let jumpAnimation = this.scene.add.sprite(this.x, this.y, this.flapAnimation).setOrigin(0, 0);
		this.anims.play('characterFlap')
		this.scene.sound.play('jumpSFX')
		this.body.setVelocityY(-250)
	}
}