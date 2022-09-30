

var canvas = document.getElementById("myCanvas");
var canvas2 = document.getElementById("myCanvas2");
var canvas3 = document.getElementById("myCanvas3");
var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var ctx3 = canvas3.getContext("2d");



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

var sinsterReady = false;
var sinsterImage = new Image();
sinsterImage.onload = function () {
	sinsterReady = true;
};
sinsterImage.src = "images/sinsterPouch.png";

//Generate Background
var worldTiles = new Image();
worldTiles.src = "images/tileset_1bit.png";
var ffTiles = new Image();
ffTiles.src = "images/ffoverworld.png";
var worldTilesColor = new Image();
worldTilesColor.src = "images/tileset_1bitGreen.png";


//Generate Random Objects
var randomImage = new Image();
randomImage.src = "images/Corn_Stage_1.png";
randomImage.onload = function () {
};
var cornReady = false;
var corn = new Image();
corn.src = "images/corn.png";
corn.onload = function () {
};

/*var startingMap = []
for ( i=0; i < 100; i++){
    startingMap[i] = []
}

function generateTrees(density, castleDensity, grassDensity){
    for (i=0; i < 100; i++){
        for (j=0; j < 100; j++){            
            var randomBlock2 = Math.floor(Math.random() * 10000) + 1;            
            var randomBlock = Math.floor(Math.random() * 100) + 1;
            if ( randomBlock > density){
				if ( randomBlock > grassDensity) {
					startingMap[i][j] = 63;
				}
				else {
                startingMap[i][j] = 6;
				}
            }
            else { startingMap[i][j] = 7;
            }
            if ( randomBlock2 > castleDensity){
                startingMap[i][j] = 100;
            } 
        }
    }
}

generateTrees(6, 9998, 20);
*/


x = [];


for (i=0; i<100; i++){
	x[i] = [];	
	
}

for (i=0; i<100; i++){
	for (j=0; j<100; j++){					
		x[i][j] = Math.floor(Math.random() * 100) + 1;				
	}
}







function cellularAutomata(){
    for (i=1; i < 99; i++){
        for (j=1; j < 99; j++){
        var randomCanvas2;
        var numLand = 0;
        var outOf4 = Math.floor(Math.random() * 4) + 1
        if ( outOf4 == 1){
            randomCanvas2 = x[i-1][j];
        }
        if ( outOf4 == 2){
            randomCanvas2 = x[i+1][j];
        }
        if ( outOf4 == 3){
            randomCanvas2 = x[i][j-1];
        }
        if ( outOf4 == 4){
            randomCanvas2 = x[i][j+1];
        }
        x[i][j] = randomCanvas2;
    }
    }
}


function grouping(){
cellularAutomata();
cellularAutomata();
cellularAutomata();
cellularAutomata();
cellularAutomata();

cellularAutomata();
cellularAutomata();
cellularAutomata();
cellularAutomata();
cellularAutomata();

}

function interGrouping(){
grouping();
grouping();
grouping();
grouping();
grouping();

grouping();
grouping();
grouping();
grouping();
grouping();
}

function interInterGrouping(){
interGrouping();
interGrouping();
interGrouping();
interGrouping();
interGrouping();

interGrouping();
interGrouping();
interGrouping();
interGrouping();
interGrouping();
}

interInterGrouping();
interInterGrouping();
interInterGrouping();
interInterGrouping();
interInterGrouping();

interInterGrouping();
interInterGrouping();
interInterGrouping();
interInterGrouping();
interInterGrouping();

interInterGrouping();
interInterGrouping();
interInterGrouping();
interInterGrouping();
interInterGrouping();

interInterGrouping();
interInterGrouping();

isCastle = [];





for (i=0; i<100; i++){
	isCastle[i] = [];	
	
}

for (i=0; i<100; i++){
	for (j=0; j<100; j++){					
		
		var randomBlock2 = Math.floor(Math.random() * 2500) + 1;
		
		if ( randomBlock2 <= 20){
			if ( randomBlock2 <= 5){
				if ( randomBlock2 == 3){
				isCastle[i][j] = 3;
				}
				else{
					isCastle[i][j] = 2;
				}
			}
			else{
				isCastle[i][j] = 1;
			}
		}
		
				
		
		
	
		
		
		
		
		
		

		else{
			isCastle[i][j] = 0;
		}
		
	}
}
















matrix = [];
for (i=0; i<100; i++){
	matrix[i] = [];
}
	
		

		













	function swapLoad(i, j) {

	
		if (x[i][j] >= 67){
			
			
			matrix[i][j] = []
			for (k=0; k<=100; k++){
				matrix[i][j][k] = []
				for (l=0; l<=100; l++){                                                                                         
					var randomBlock = Math.floor(Math.random() * 100) + 1;
					var density = 6;
					var grassDensity = 20;
					if ( randomBlock > density){
						if ( randomBlock > grassDensity) {
							matrix[i][j][k][l] = 63;
						}
						else{
							matrix[i][j][k][l] = 6;
						}
					}
					else {
						matrix[i][j][k][l] = 7;
					}
				}
			}
		}
		else {
			matrix[i][j] = [];
			for(k=0; k<=100; k++){
				matrix[i][j][k] = []
				for(l=0; l<=100; l++){
					matrix[i][j][k][l] = 17;
				}

			}
		}
	}











// Game objects
var viewport = {
	screen		 : [0,0],
	startTile	 : [0,0],
	endTile		 : [0,0],
	offset		 : [0,0],
	update		 : function(px, py)
	{
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

		if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

		if(this.endTile[0] >= mapW) { this.endTile[0] = mapW; }
		if(this.endTile[1] >= mapH) { this.endTile[1] = mapH; }

	}
};

window.onload = function(){
	viewport.screen = [document.getElementById('myCanvas').width,
		document.getElementById('myCanvas').height];

    ;
}

function draw(i, j){
	
	console.log("Max Memory Size: " + performance.memory.jsHeapSizeLimit);
	console.log("Total Memory Size: " + performance.memory.totalJSHeapSize);
	console.log("Used Memory Size: " + performance.memory.usedJSHeapSize);

    for ( k = viewport.startTile[0]; k <= viewport.endTile[0]; k++){
        for ( l = viewport.startTile[1]; l <= viewport.endTile[1]; l++){
            if(matrix[i][j][k][l] <= 63){
            ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16), (Math.floor(matrix[i][j][k][l] / 8) * 16), 16, 16, viewport.offset[0] + k * 16, viewport.offset[1] + l * 16, 16, 16);  
            }
                
        }
    }
	
	

	
	

	for (k=0; k < 100; k++){
		for (l=0; l < 100; l++){
			
			
			

			
			
			
					
			
		
			
							
			if (x[k][l] >= 67){
				if (isCastle[k][l] == 3){
					ctx3.fillStyle = 'gold'
					ctx3.fillRect(k*2, (l*2)+50, 2, 2);
				}
				if (isCastle[k][l] == 2){
					ctx3.fillStyle = 'violet'
					ctx3.fillRect(k*2, (l*2)+50, 2, 2);
				}
				if (isCastle[k][l] == 1){
					ctx3.fillStyle = 'sienna'
					ctx3.fillRect(k*2, (l*2)+50, 2, 2);
				}
				if (isCastle[k][l] == 0){
					ctx3.fillStyle = 'darkgreen'
					ctx3.fillRect(k*2, (l*2)+50, 2, 2);
				}
				

				


				
				
				
				
				
				
				
				
							

				

				
											
				
				
				
				
			



				

				

				

				
													
			}																				
			else {
				ctx3.fillStyle = 'blue'
				ctx3.fillRect(k*2, (l*2)+50, 2, 2);										
			}


			
		}
	}
	ctx3.beginPath();
	ctx3.fillStyle = "red";
	ctx3.fillRect(i*2, (j*2)+50, 2, 2);
	ctx3.fillText(monstersCaught + " , " + sinstersCaught, 50, 24)
	

	
    /*for ( k = viewport.startTile[0]; k <= viewport.endTile[0]; k++){
        for ( l = viewport.startTile[1]; l <= viewport.endTile[1]; l++){
            if(matrix[i][j][k][l] > 63){
				function drawHouse() {
					ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16), 16, 16, viewport.offset[0] + i * 16, viewport.offset[1] + j * 16, 16, 16);  
                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16) + 16, (Math.floor(startingMap[i][j] / 20) * 16), 16, 16, viewport.offset[0] + i * 16 + 16, viewport.offset[1] + j * 16, 16, 16);  
                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16), 16, 16, viewport.offset[0] + i * 16 + 32, viewport.offset[1] + j * 16, 16, 16);  
                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16), 16, 16, viewport.offset[0] + i * 16 + 48, viewport.offset[1] + j * 16, 16, 16);  

                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16) - 16, 16, 16, viewport.offset[0] + i * 16, viewport.offset[1] + j * 16 - 16, 16, 16);  
                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16) - 16, 16, 16, viewport.offset[0] + i * 16 + 16, viewport.offset[1] + j * 16 - 16, 16, 16);  
                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16) - 16, 16, 16, viewport.offset[0] + i * 16 + 32, viewport.offset[1] + j * 16 - 16, 16, 16);  
                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16) - 16, 16, 16, viewport.offset[0] + i * 16 + 48, viewport.offset[1] + j * 16 - 16, 16, 16);  

                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16) - 32, 16, 16, viewport.offset[0] + i * 16, viewport.offset[1] + j * 16 - 32, 16, 16);  
                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16) - 32, 16, 16, viewport.offset[0] + i * 16 + 16, viewport.offset[1] + j * 16 - 32, 16, 16);  
                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16) - 32, 16, 16, viewport.offset[0] + i * 16 + 32, viewport.offset[1] + j * 16 - 32, 16, 16);  
                	ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16) - 32, 16, 16, viewport.offset[0] + i * 16 + 48, viewport.offset[1] + j * 16 - 32, 16, 16);  
	
					


                	//ctx2.drawImage(ffTiles, ((startingMap[i][j]%20) * 16), (Math.floor(startingMap[i][j] / 20) * 16), 64, 64, viewport.offset[0] + i * 16, viewport.offset[1] + j * 16, 64, 64);  




				}
				drawHouse();				
            }
        }
    }
	*/

}


var drawVision = true;
var hero = {
	speed: 64 // movement in pixels per second
};
var monster = {};
var monstersCaught = 0;

var sinster = {};
var sinstersCaught = 0;

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
	swapLoad(monstersCaught, sinstersCaught);
	hero.x = 500;
	hero.y = 500;

	// Throw the monster somewhere on the screen randomly
	monster.x = canvas.width + 499; //32 + (Math.random() * (canvas.width - 64));
	monster.y = canvas.width + 499; //32 + (Math.random() * (canvas.height - 64));

	sinster.x = canvas.width + 599; //32 + (Math.random() * (canvas.width - 64));
	sinster.y = canvas.width + 599; //32 + (Math.random() * (canvas.height - 64));



	
	

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
	var delayInSeconds = 10000;
	var delayInMinutes = 500;
	if (65 in keysDown) { // Player holding a		
		if (drawVision) {
		heroX = hero.x;
		heroY = hero.y;
		ctx.drawImage(randomImage, viewport.offset[0] + heroX, viewport.offset[1] + heroY - 40, 16, 16);
		
		drawVision = false;
		}


		setTimeout(function() {						
			cornReady = true;
		}, delayInSeconds);
		
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
			
			++monstersCaught;
			reset();

		}, delayInMilliseconds);
		




		
	}
	if (
		hero.x <= (sinster.x + 32)
		&& sinster.x <= (hero.x + 32)
		&& hero.y <= (sinster.y + 32)
		&& sinster.y <= (hero.y + 32)
	) {
		
		hero.x = canvas.width / 2;
		hero.y = canvas.height / 2;
		var delayInMilliseconds = 2000;
		
		setTimeout(function() {
			
			++sinstersCaught;
			reset();

		}, delayInMilliseconds);
		




		
	}
};

// Draw everything

var render = function () {

	
	
	draw(monstersCaught, sinstersCaught);
	

	viewport.update(hero.x + 102,
		hero.y + 7);
		


	

	
	

	if(cornReady) {
		ctx.drawImage(corn, viewport.offset[0] + heroX, viewport.offset[1] + heroY);
		

	}
	if(monsterReady) {
		ctx.drawImage(monsterImage, viewport.offset[0] + monster.x, viewport.offset[1] + monster.y, 16, 16);
		

	}
	if(sinsterReady) {
		ctx.drawImage(sinsterImage, viewport.offset[0] + sinster.x, viewport.offset[1] + sinster.y, 16, 16);
		

	}
	

	if (heroReady) {
		ctx.drawImage(heroImage, viewport.offset[0] + hero.x, viewport.offset[1] + hero.y, 16, 16);
		
		
	}

	

	// Score
	ctx.fillStyle = "rgb(250, 25, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("YOU ROCK " + Math.floor(hero.x / 16) + " , " + Math.floor(hero.y / 16), 32, 32);
};

// The main game loop
var main = function () {
	
	ctx.clearRect( 0, 0, canvas.width, canvas.height);
	ctx3.clearRect( 0, 0, canvas.width, canvas.height);
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