// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
const config = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: 'black',
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: false,
    },
  }
}

var game = new Phaser.Game(config)

let player, ball, blueBricks, yellowBricks, redBricks, cursors

function preload() {
  this.load.image('ball', 'assets/ball.png')
  this.load.image('brick1', 'assets/brick1.png')
  this.load.image('brick2', 'assets/brick2.png')
  this.load.image('brick3', 'assets/brick3.png')
  this.load.image('paddle', 'assets/paddle.png')

}
function create() {
  // ADD SINGLE SPRITES
  player = this.physics.add.sprite(
    400, // x position
    600, // y position
    'paddle' // key/name of image for the sprite)
  )

  /*
  It's important to understand how Phaser and most 2D game
  frameworks use coordinates. The graphs we learned in school
  usually place the origin i.e. point (0, 0) at the center.
  In Phaser, the origin is at the top left of the screen.
  As x increases, we are essentially moving to the right.
  As y increases, we are moving downward.
  */

  ball = this.physics.add.sprite(
    400,
    500,
    'ball'
  )

  // ADD SPRITE GROUPS
  blueBricks = this.physics.add.group({
    key: 'brick1',
    repeat: 9,
    setXY: {
      x: 80,
      y: 200,
      stepX: 70
    }
  })
  /* Instead of adding shapes individually this.physics.add.sprite()
  we use this.physics.add.group() and pass a JavaScript object.
  The key property references the image key that all the sprites
  in the sprite group will use. The repeat property tells
  Phaser how many more times to create a sprite.
  Every sprite group creates one sprite. With repeat set to 9,
  Phaser will create 10 sprites in that sprite group.
  The setXY object has three interesting properties:

  x is the X Coordinate of the first sprite
  y is the Y Coordinate of the second sprite
  stepX is the length in pixels between repeated sprites on the x-axis.
  stepY is the length in pixels between repeated sprites on the y-axis (unused)
  */

  // Add yellow bricks
  yellowBricks = this.physics.add.group({
    key: 'brick2',
    repeat: 9,
    setXY: {
      x: 80,
      y: 125,
      stepX: 70
    }
  })

  // Add red bricks
  redBricks = this.physics.add.group({
    key: 'brick3',
    repeat: 9,
    setXY: {
      x: 80,
      y: 50,
      stepX: 70
    }
  })
}
function update() { }
