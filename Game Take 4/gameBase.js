var canvas = document.getElementById("myCanvas");
var canvas2 = document.getElementById("myCanvas2");
var canvas3 = document.getElementById("myCanvas3");
var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var ctx3 = canvas3.getContext("2d");



// Hero image


//Generate Background
var worldTiles = new Image();
worldTiles.src = "images/tileset_1bit.png";
var ffTiles = new Image();
ffTiles.src = "images/ffoverworld.png";
var worldTilesColor = new Image();
worldTilesColor.src = "images/tileset_1bitGreen.png";


//Generate Random Objects


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

function draw(i, j){
	
	console.log("Max Memory Size: " + performance.memory.jsHeapSizeLimit);
	console.log("Total Memory Size: " + performance.memory.totalJSHeapSize);
	console.log("Used Memory Size: " + performance.memory.usedJSHeapSize);


	ctx3.beginPath();
	ctx3.fillStyle = "red";
	ctx3.fillRect(i*2, (j*2)+50, 2, 2);
	ctx3.fillText(monstersCaught + " , " + sinstersCaught, 50, 24)

	ctx.fillStyle = "rgb(250, 25, 250)";
	ctx.font = "24px Helvetica";
	ctx.fillText("YOU ROCK " + Math.floor(0 / 16) + " , " + Math.floor(0 / 16), 32, Math.floor(Math.random() * 32) + 1);

	
	
	

	
	
	


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



	
	



// Update game objects


	
// Draw everything

var render = function () {

	
	
	draw(monstersCaught, sinstersCaught);
	
	
	

	

	// Score
	



	
};

// The main game loop
var main = function () {
	
	ctx.clearRect( 0, 0, canvas.width, canvas.height);
	ctx3.clearRect( 0, 0, canvas.width, canvas.height);
	
	render();



	// Request to do this again ASAP
	requestAnimationFrame(main);
};


// Let's play this game!

main();
