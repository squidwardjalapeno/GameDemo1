
var canvas = document.getElementById("myCanvas");
var canvas2 = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");



// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/cornPouch.png";

//Generate Background
var worldTiles = new Image();
worldTiles.src = "images/tileset_1bit.png";
var ffTiles = new Image();
ffTiles.src = "images/ffoverworld.png";

//Generate Random Objects
var randomImage = new Image();
randomImage.src = "images/randomImage.png";
var cornReady = false;
var corn = new Image();
corn.src = "images/corn.png";
corn.onload = function () {
};

var startingMap = []
for ( i=0; i < 100; i++){
    startingMap[i] = []
}

function generateTrees(density, castleDensity){
    for (i=0; i < 100; i++){
        for (j=0; j < 100; j++){
            var randomBlock2 = Math.floor(Math.random() * 10000) + 1;            
            var randomBlock = Math.floor(Math.random() * 100) + 1;
            if ( randomBlock > density){
                startingMap[i][j] = 6;
            }
            else { startingMap[i][j] = 7;
            }
            if ( randomBlock2 > castleDensity){
                startingMap[i][j] = 150;
            } 
        }
    }
}

generateTrees(6, 9998);

function draw(){
    for ( i=0; i < startingMap.length; i++){
        for ( j=0; j < startingMap[i].length; j++){
            if(startingMap[i][j] <= 63){
            ctx2.drawImage(worldTiles, ((startingMap[i][j]%8) * 16), (Math.floor(startingMap[i][j] / 8) * 16), 16, 16, j * 16, i * 16, 16, 16);  
            }
                
        }
    }
    for ( i=0; i < startingMap.length; i++){
        for ( j=0; j < startingMap[i].length; j++){
            if(startingMap[i][j] > 63){
                ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16), 64, 64, j * 16, i * 16, 64, 64);  
            }
        }
    }

}

window.onload = function(){
    draw();
}




// Game objects

var hero = {
	speed: 64 // movement in pixels per second
};
var monster = {};
var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));

	
	

};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		
		hero.x = canvas.width / 2;
		hero.y = canvas.height / 2;
		var delayInMilliseconds = 2000;
		
		setTimeout(function() {
			cornReady = true;
			++monstersCaught;
			reset();

		}, delayInMilliseconds);
		




		
	}
};

// Draw everything

var render = function () {
	
	

	if(cornReady) {
		ctx.drawImage(corn, 0, 0);
		

	}
	

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
		ctx2.drawImage(randomImage, 0, 0)
		
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 25, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
};

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
reset();
main();