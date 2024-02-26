/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 600;
const SCREEN_HEIGHT = 400;
const PLAYER_HEIGHT = 25;
const PLAYER_WIDTH = 25;

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
    player = new Sprite(50, 50, 50, 50, 'd');
    player.color = 'black';
  
    floor = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    floor.color = 'black';
    world.gravity.y = 10;
    
    
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background("blue");
}

/*******************************************************/
//  END OF APP
/*******************************************************/
