
// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "img/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "img/hero.png";

// Game objects
var hero = {
    speed: 256, // movement in pixels per second
    x: 0,
    y: 0
};


// Handle keyboard controls
var keysDown = {}

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
    console.log(keysDown) // See what's going on
}, false)

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false)

// Update game objects
function update(modifier) {
    if (38 in keysDown) { // UP
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) { // DOWN
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) { // LEFT
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) { // RIGHT
        hero.x += hero.speed * modifier;
    }
};

// Draw everything
function render() {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
}

// The main game loop
function main() {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Let's play the game!
hero.x = canvas.width / 2;
hero.y = canvas.height / 2;

var then = Date.now;
main();
