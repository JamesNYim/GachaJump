class Character extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture, frame, gravity, moveSpeed, jumpHeight) {
		super(scene, x, y, texture, frame)
		scene.physics.add.existing(this)
		this.scene.add.existing(this)

		this.moveSpeed = moveSpeed
		this.jumpHeight = jumpHeight
		this.gravity = gravity
		this.body.setGravityY(300)
	}

	preload() {
		game.load.image('characterSprite', './assets/bird.png')
	}
	create() {

	}
	update() {	
		if (Phaser.Input.Keyboard.JustDown(keyJUMP)) {
			this.jump()
		}
	}

	jump() {
		console.log('Jump!')
		this.body.setVelocityY(-400)
		this.angle = -15
		
	}
}