var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");






var block = {
	speed: 64, // movement in pixels per second
    x: 500,
    y: 500
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


// Update game objects
var update = function (modifier) {

	
	
	if (38 in keysDown) { // Player holding up
		block.y -= block.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		block.y += block.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		block.x -= block.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		block.x += block.speed * modifier;
	}
}






var render = function () {

    ctx.fillStyle = "blue";
ctx.fillRect( 10 + block.x, 10 + block.y, 100, 100);




}



// The main game loop
var main = function () {

	
	
	ctx.clearRect( 0, 0, canvas.width, canvas.height);
	
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};


// Let's play this game!
var then = Date.now();
//reset();
main();
