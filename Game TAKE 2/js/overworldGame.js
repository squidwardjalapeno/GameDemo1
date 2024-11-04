

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

// GAME LOGIC

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
        var outOf8 = Math.floor(Math.random() * 8) + 1
        if ( outOf8 == 1){
            randomCanvas2 = x[i-1][j];
        }
        if ( outOf8 == 2){
            randomCanvas2 = x[i+1][j];
        }
        if ( outOf8 == 3){
            randomCanvas2 = x[i][j-1];
        }
        if ( outOf8 == 4){
            randomCanvas2 = x[i][j+1];
        }
		if ( outOf8 == 5){
            randomCanvas2 = x[i+1][j+1];
        }
		if ( outOf8 == 6){
            randomCanvas2 = x[i-1][j+1];
        }
		if ( outOf8 == 7){
            randomCanvas2 = x[i-1][j-1];
        }
		if ( outOf8 == 8){
            randomCanvas2 = x[i+1][j-1];
        }
		
        x[i][j] = randomCanvas2;

		

			
		
    }
    }
}


function cleanUpMap(){

for (i=1; i < 99; i++){
    for (j=1; j < 99; j++){

	if( x[i][j] >= 67 &&

		x[i-1][j] < 67 &&
		x[i][j-1] < 67 &&
		x[i+1][j] < 67 &&
		x[i][j+1] < 67 
		/*&&
		x[i-1][j+1] < 67 &&
		x[i-1][j-1] < 67 &&
		x[i+1][j+1] < 67 &&
		x[i+1][j-1] < 67
		*/){

		x[i][j] = Math.floor(Math.random() * 66) + 1

		

		}

		if( x[i][j] < 67 &&

			x[i-1][j] >= 67 &&
			x[i][j-1] >= 67 &&
			x[i+1][j] >= 67 &&
			x[i][j+1] >= 67 
			/*&&
			x[i-1][j+1] < 67 &&
			x[i-1][j-1] < 67 &&
			x[i+1][j+1] < 67 &&
			x[i+1][j-1] < 67
			*/){
	
			x[i][j] = Math.floor(Math.random() * 33) + 1 + 67;
	
			
	
			}
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
/*
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
*/

cleanUpMap();

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

					var randomBlock = Math.floor(Math.random() * 1000) + 1;
					
					var density = 60;
					var grassDensity = 200;
					
					
					

					//if (randomBlock > castleDensity){
						

						
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
				//}
					/*else {
						matrix[i][j][k][l] = 62;

						var random1 = Math.floor(Math.random() * 4) + 1;
						var random2 = Math.floor(Math.random() * 4) + 1;
						var chanceOf2Bedrolls = Math.floor(Math.random() * 4) + 1;

						matrix[i][j][k - random1][l + random2] = 61;

						matrix[i][j][k - random1][l + random2 + 1] = 60;
						*/

						/*if (chanceOf2Bedrolls == 4) {
							var random3 = Math.floor(Math.random() * 4) + 1;
							var random4 = Math.floor(Math.random() * 4) + 1;

							matrix[i][j][k - random3][l + random4] = 61;

							matrix[i][j][k - random3][l + random4 + 1] = 60;

							
					}
							*/

						

						

						
						

						

						
					
				}


				
			}

			

			for (k=5; k<=95; k++){

				

				for (l=5; l<=95; l++){
					var randomBlock3 = Math.floor(Math.random() * 40000) + 1;
					var campfireDensity = 10;
					var houseDensity = 2;

					if (randomBlock3 <= campfireDensity) {
						matrix[i][j][k][l] = 62;

						var random1 = Math.floor(Math.random() * 4) + 1;
						var random2 = Math.floor(Math.random() * 4) + 1;
						var chanceOf2Bedrolls = Math.floor(Math.random() * 4) + 1;
						var chanceOfTreestump = Math.floor(Math.random() * 2) + 1;
						var chanceOfStool = Math.floor(Math.random() * 2) + 1;
						var chanceOf2Stools = Math.floor(Math.random() * 4) + 1;
						var chanceOfTent = Math.floor(Math.random() * 4) + 1;

						matrix[i][j][k - random1][l + random2] = 61;

						matrix[i][j][k - random1][l + random2 + 1] = 60;
						

						if (chanceOf2Bedrolls == 4) {
							var random3 = Math.floor(Math.random() * 4) + 1;
							var random4 = Math.floor(Math.random() * 4) + 1;

							matrix[i][j][k - random3][l + random4] = 61;

							matrix[i][j][k - random3][l + random4 + 1] = 60;
						}

						if (chanceOfTreestump == 2) {
							var random5 = Math.floor(Math.random() * 4) + 1;
							var random6 = Math.floor(Math.random() * 4) + 1;

							matrix[i][j][k - random5][l - random6] = 59;

							
						}

						if (chanceOfStool == 2) {
							var random7 = Math.floor(Math.random() * 4) + 1;
							var random8 = Math.floor(Math.random() * 4) + 1;

							matrix[i][j][k + random7][l - random8] = 58;

							
						}

						if (chanceOf2Stools == 2) {
							var random9 = Math.floor(Math.random() * 4) + 1;
							var random10 = Math.floor(Math.random() * 4) + 1;

							matrix[i][j][k + random9][l + random10] = 58;

							
						}

						if (chanceOfTent == 2) {
							var random11 = Math.floor(Math.random() * 4) + 1;
							var random12 = Math.floor(Math.random() * 4) + 1;

							matrix[i][j][k + random11][l + random12] = 55;
							matrix[i][j][k + random11 - 1][l + random12] = 54;
							matrix[i][j][k + random11][l + random12 - 1] = 47;
							matrix[i][j][k + random11 - 1][l + random12 - 1] = 46;

						}



							


					}

					/*
					if (randomBlock3 == houseDensity){

						matrix[i][j][k][l] = 50;
						matrix[i][j][k + 1][l] = 49;
						matrix[i][j][k + 2][l] = 52;
						matrix[i][j][k + 3][l] = 50;

						matrix[i][j][k][l - 1] = 48;
						matrix[i][j][k + 1][l - 1] = 48;
						matrix[i][j][k + 2][l - 1] = 48;
						matrix[i][j][k + 3][l - 1] = 48;

						matrix[i][j][k][l - 2] = 40;
						matrix[i][j][k + 1][l - 2] = 40;
						matrix[i][j][k + 2][l - 2] = 40;
						matrix[i][j][k + 3][l - 2] = 40;




					}
						*/


						







				}
			}

			for (k=20; k<=80; k++){

				

				for (l=20; l<=80; l++){

					var randomBlock4 = Math.floor(Math.random() * 4000) + 1;
					var wellDensity = 1;
					

					if (randomBlock4 == wellDensity){

						matrix[i][j][k][l] = 38;
						matrix[i][j][k + 1][l] = 39;
						matrix[i][j][k][l - 1] = 30;
						matrix[i][j][k + 1][l - 1] = 31;

						
						var random15 = Math.floor(Math.random() * 19) + 1;
						var random16 = Math.floor(Math.random() * 19) + 1;
						var random17 = Math.floor(Math.random() * 19) + 1;
						var random18 = Math.floor(Math.random() * 19) + 1;
						var houseCount = 8;

						function buildHouse(){

							var random13 = Math.floor(Math.random() * 38) - 18;
							var random14 = Math.floor(Math.random() * 38) - 18;
				
							if( (matrix[i][j][k - random13][l - random14] != 40  &&
								matrix[i][j][k + 3 - random13][l - random14] != 40  &&								
								matrix[i][j][k - random13][l - 2 - random14] != 40   &&								
								matrix[i][j][k + 3 - random13][l - 2 - random14] != 40) &&

								(matrix[i][j][k - random13][l - random14] != 48  &&
								matrix[i][j][k + 3 - random13][l - random14] != 48  &&								
								matrix[i][j][k - random13][l - 2 - random14] != 48   &&								
								matrix[i][j][k + 3 - random13][l - 2 - random14] != 48) &&

								(matrix[i][j][k - random13][l - random14] != 49  &&
								matrix[i][j][k + 3 - random13][l - random14] != 49  &&								
								matrix[i][j][k - random13][l - 2 - random14] != 49   &&								
								matrix[i][j][k + 3 - random13][l - 2 - random14] != 49) &&

								(matrix[i][j][k - random13][l - random14] != 50  &&
								matrix[i][j][k + 3 - random13][l - random14] != 50  &&								
								matrix[i][j][k - random13][l - 2 - random14] != 50   &&								
								matrix[i][j][k + 3 - random13][l - 2 - random14] != 50) &&

								(matrix[i][j][k - random13][l - random14] != 52  &&
								matrix[i][j][k + 3 - random13][l - random14] != 52  &&								
								matrix[i][j][k - random13][l - 2 - random14] != 52   &&								
								matrix[i][j][k + 3 - random13][l - 2 - random14] != 52)
							){	
								console.log(matrix[i][j][k - random13][l - random14]);
								console.log(matrix[i][j][k + 3 - random13][l - random14]);
								console.log(matrix[i][j][k - random13][l - 2 - random14]);
								console.log(matrix[i][j][k + 3 - random13][l - 2 - random14]);

							
				
								matrix[i][j][k - random13][l - random14] = 50;
								matrix[i][j][k + 1 - random13][l - random14] = 49;
								matrix[i][j][k + 2 - random13][l - random14] = 52;
								matrix[i][j][k + 3 - random13][l - random14] = 50;
				
								matrix[i][j][k - random13][l - 1 - random14] = 48;
								matrix[i][j][k + 1 - random13][l - 1 - random14] = 48;
								matrix[i][j][k + 2 - random13][l - 1 - random14] = 48;
								matrix[i][j][k + 3 - random13][l - 1 - random14] = 48;
				
								matrix[i][j][k - random13][l - 2 - random14] = 40;
								matrix[i][j][k + 1 - random13][l - 2 - random14] = 40;
								matrix[i][j][k + 2 - random13][l - 2 - random14] = 40;
								matrix[i][j][k + 3 - random13][l - 2 - random14] = 40;
								
								
								
						
				
								
				
							}
							else {
								console.log("ok");
								
								
								
							}
						}

						
						
						buildHouse();
						buildHouse();
						buildHouse();
						buildHouse();
						buildHouse();
						buildHouse();
						buildHouse();
						buildHouse();
						

							

						
						
						/*

						matrix[i][j][k - random13][l - random14] = 50;
						matrix[i][j][k + 1 - random13][l - random14] = 49;
						matrix[i][j][k + 2 - random13][l - random14] = 52;
						matrix[i][j][k + 3 - random13][l - random14] = 50;

						matrix[i][j][k - random13][l - 1 - random14] = 48;
						matrix[i][j][k + 1 - random13][l - 1 - random14] = 48;
						matrix[i][j][k + 2 - random13][l - 1 - random14] = 48;
						matrix[i][j][k + 3 - random13][l - 1 - random14] = 48;

						matrix[i][j][k - random13][l - 2 - random14] = 40;
						matrix[i][j][k + 1 - random13][l - 2 - random14] = 40;
						matrix[i][j][k + 2 - random13][l - 2 - random14] = 40;
						matrix[i][j][k + 3 - random13][l - 2 - random14] = 40;





						matrix[i][j][k - random15][l + random16] = 50;
						matrix[i][j][k + 1 - random15][l + random16] = 49;
						matrix[i][j][k + 2 - random15][l + random16] = 52;
						matrix[i][j][k + 3 - random15][l + random16] = 50;

						matrix[i][j][k - random15][l - 1 + random16] = 48;
						matrix[i][j][k + 1 - random15][l - 1 + random16] = 48;
						matrix[i][j][k + 2 - random15][l - 1 + random16] = 48;
						matrix[i][j][k + 3 - random15][l - 1 + random16] = 48;

						matrix[i][j][k - random15][l - 2 + random16] = 40;
						matrix[i][j][k + 1 - random15][l - 2 + random16] = 40;
						matrix[i][j][k + 2 - random15][l - 2 + random16] = 40;
						matrix[i][j][k + 3 - random15][l - 2 + random16] = 40;





						matrix[i][j][k + random17][l - random18] = 50;
						matrix[i][j][k + 1 + random17][l - random18] = 49;
						matrix[i][j][k + 2 + random17][l - random18] = 52;
						matrix[i][j][k + 3 + random17][l - random18] = 50;

						matrix[i][j][k + random17][l - 1 - random18] = 48;
						matrix[i][j][k + 1 + random17][l - 1 - random18] = 48;
						matrix[i][j][k + 2 + random17][l - 1 - random18] = 48;
						matrix[i][j][k + 3 + random17][l - 1 - random18] = 48;

						matrix[i][j][k + random17][l - 2 - random18] = 40;
						matrix[i][j][k + 1 + random17][l - 2 - random18] = 40;
						matrix[i][j][k + 2 + random17][l - 2 - random18] = 40;
						matrix[i][j][k + 3 + random17][l - 2 - random18] = 40;


						*/


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
		

		console.log(matrix[i][j]);
	
	
}











// VIEWPORT
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


var heightRandom = 0;



function draw(i, j){

	// FUNCTIONS

	/*function drawCampfire(a, b){

		ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16), (Math.floor(matrix[i][j][k][l] / 8) * 16), 16, 16, viewport.offset[0] + k * 16 - a, viewport.offset[1] + l * 16 - b, 16, 16);  
	
	}
		*/
		
		

	/*function drawBedroll(a, b){

		ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 16, (Math.floor(matrix[i][j][k][l] / 8) * 16), 16, 16, viewport.offset[0] + k * 16 - a, viewport.offset[1] + l * 16 - (b + 16), 16, 16);  
		ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 32, (Math.floor(matrix[i][j][k][l] / 8) * 16), 16, 16, viewport.offset[0] + k * 16 - a, viewport.offset[1] + l * 16 - b, 16, 16);  


	}

	function drawTreestump(a, b){
		ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 48, (Math.floor(matrix[i][j][k][l] / 8) * 16), 16, 16, viewport.offset[0] + k * 16 - a, viewport.offset[1] + l * 16 - b, 16, 16);  

	}

	function drawStool(a, b){
		ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 64, (Math.floor(matrix[i][j][k][l] / 8) * 16), 16, 16, viewport.offset[0] + k * 16 - a, viewport.offset[1] + l * 16 - b, 16, 16);  

	}

	function drawTent(a, b){
		ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) + 16, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16 - a, viewport.offset[1] + l * 16 - b, 16, 16);  
		ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16), (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16 - (a + 16), viewport.offset[1] + l * 16 - b, 16, 16);
		ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) + 16, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 32, 16, 16, viewport.offset[0] + k * 16 - a, viewport.offset[1] + l * 16 - (b + 16), 16, 16);  
		ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16), (Math.floor(matrix[i][j][k][l] / 8) * 16) - 32, 16, 16, viewport.offset[0] + k * 16 - (a + 16), viewport.offset[1] + l * 16 - (b + 16), 16, 16);  
	}

	function drawCamp(){

	// VARS

	//var random1 = Math.floor(Math.random() * 4) + 1;
	//var random2 = Math.floor(Math.random() * 4) + 1;
		

		drawBedroll(16, 16);
		drawTreestump(32, 80);
	}
*/
	

	
	
	//console.log("Max Memory Size: " + performance.memory.jsHeapSizeLimit);
	//console.log("Total Memory Size: " + performance.memory.totalJSHeapSize);
	//console.log("Used Memory Size: " + performance.memory.usedJSHeapSize);

    for ( k = viewport.startTile[0]; k <= viewport.endTile[0]; k++){
        for ( l = viewport.startTile[1]; l <= viewport.endTile[1]; l++){

            //if(matrix[i][j][k][l] == 63 || 7 || 6){
            ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16), (Math.floor(matrix[i][j][k][l] / 8) * 16), 16, 16, viewport.offset[0] + k * 16, viewport.offset[1] + l * 16, 16, 16);  
           // }

			
			

			
			
                
        }
    }
		
	
	//var random1 = Math.floor(Math.random() * 4) + 1;
	//var random2 = Math.floor(Math.random() * 4) + 1;
	/*
	var heightOutOf2 = Math.floor(Math.random() * 2) + 1;
				
				if (heightOutOf2 == 1){
					++heightRandom;
				}
				if (heightOutOf2 == 2){
					--heightRandom;					
				}
					*/

	
	

	for (k=0; k < 100; k++){
		for (l=0; l < 100; l++){

			
			
			
			

			
			
			
					
			
		
			
							
			if (x[k][l] >= 67){

			//if (l >= 8 && l <= 92){
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

			//}
			/*
			else{

				ctx3.fillStyle = 'lightgrey';
				
				ctx3.fillRect(k*2, (l*2)+50, 2, 2);
				

			}
				*/

			
				

				


				
				
				
				
				
				
				
				
							

				

				
											
				
				
				
				
			



				

				

				

				
													
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
	

	
    for ( k = viewport.startTile[0]; k <= viewport.endTile[0]; k++){
        for ( l = viewport.startTile[1]; l <= viewport.endTile[1]; l++){

			if(matrix[i][j][k][l] == 62){

				
				//var random2 = Math.floor(Math.random() * 4) + 1;
				
				//drawTent(16, 32);
				//drawCamp();
				
				
				

				//drawCampfire(16, 32);

				//drawBedroll(16, 32);

				/*ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 64, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16, viewport.offset[1] + l * 16, 16, 16);  
				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 80, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16 + 16, viewport.offset[1] + l * 16, 16, 16);
				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 48, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16 + 32, viewport.offset[1] + l * 16, 16, 16);
				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 64, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16 + 48, viewport.offset[1] + l * 16, 16, 16);

				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 96, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16, viewport.offset[1] + l * 16 - 16, 16, 16);  
				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 64, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16 + 16, viewport.offset[1] + l * 16 - 16, 16, 16);
				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 32, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16 + 32, viewport.offset[1] + l * 16 - 16, 16, 16);
				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 96, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16 + 48, viewport.offset[1] + l * 16 - 16, 16, 16);

				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 96, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 32, 16, 16, viewport.offset[0] + k * 16, viewport.offset[1] + l * 16 - 32, 16, 16);  
				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 96, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16 + 16, viewport.offset[1] + l * 16 - 32, 16, 16);
				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 96, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 16, 16, 16, viewport.offset[0] + k * 16 + 32, viewport.offset[1] + l * 16 - 32, 16, 16);
				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 96, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 32, 16, 16, viewport.offset[0] + k * 16 + 48, viewport.offset[1] + l * 16 - 32, 16, 16);

				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 96, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 32, 16, 16, viewport.offset[0] + k * 16 + 16, viewport.offset[1] + l * 16 - 48, 16, 16);
				ctx2.drawImage(worldTilesColor, ((matrix[i][j][k][l]%8) * 16) - 96, (Math.floor(matrix[i][j][k][l] / 8) * 16) - 32, 16, 16, viewport.offset[0] + k * 16 + 32, viewport.offset[1] + l * 16 - 48, 16, 16);
				*/

			}
           /* if(matrix[i][j][k][l] > 63){
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
			*/
        }
    }
	

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
			
			--monstersCaught;
			reset();

		}, delayInMilliseconds);
		




		
	}
};

// Draw everything

var render = function () {
	

	
	
	draw(monstersCaught, sinstersCaught);
	

	viewport.update(hero.x + 16,
					hero.y + 16);
		


	

	
	

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