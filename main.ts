controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        ....................
        .....eeee...........
        .....eeee...........
        .....f33f...........
        ....333333..........
        .cccc3ff3...........
        .55555555555........
        .55555555555.fffff2.
        .55c55555555..fffff.
        .55c555555555533....
        .55c555555555533....
        .55c555555..........
        .55c555555..........
        .33c888888..........
        .33c888888..........
        .ccc88..88..........
        ..c.88..88..........
        .ccc88..88..........
        .44488..88..........
        .444ee..eeee........
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    ammo_in_mag = 11
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ammo_in_mag > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 2 2 2 2 2 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
        music.pewPew.play()
        ammo_in_mag += -1
    } else {
        mySprite.say("reload with B", 1000)
        music.powerDown.play()
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        ....................
        .....eeee...........
        .....eeee...........
        .....f33f...........
        ....333333..........
        .cccc3ff3...........
        .55555555555........
        .55555555555.fffff2.
        .55c55555555..fffff.
        .55c555555555533....
        .55c555555555533....
        .55c555555..........
        .55c555555..........
        .33c888888..........
        .33c888888..........
        .ccc88..88..........
        ..c.88..88..........
        .ccc88..88..........
        ....88..88..........
        ....ee..eeee........
        `)
})
let projectile: Sprite = null
let ammo_in_mag = 0
let mySprite: Sprite = null
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 2))
mySprite = sprites.create(img`
    ....................
    .....eeee...........
    .....eeee...........
    .....f33f...........
    ....333333..........
    .cccc3ff3...........
    .55555555555........
    .55555555555.fffff2.
    .55c55555555..fffff.
    .55c555555555533....
    .55c555555555533....
    .55c555555..........
    .55c555555..........
    .33c888888..........
    .33c888888..........
    .ccc88..88..........
    ..c.88..88..........
    .ccc88..88..........
    ....88..88..........
    ....ee..eeee........
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.ay = 200
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........fffff.........
    ........ff1111bff.......
    .......fb1111111bf......
    .......f111111111f......
    ......fd1111111ffff.....
    ......fd111dd1c111bf....
    ......fb11fcdf1b1bff....
    ......f11111bfbfbff.....
    ......f1b1bdfcffff......
    ......fbfbfcfcccf.......
    ......ffffffffff........
    .........ffffff.........
    .........ffffff.........
    .........fffffff..f.....
    ..........fffffffff.....
    ...........fffffff......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
mySprite2.setPosition(250, 100)
let enmy_hp = 2
mySprite.setVelocity(50, 50)
ammo_in_mag = 11
game.onUpdateInterval(1000, function () {
	
})
