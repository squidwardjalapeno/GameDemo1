//test
canvasWidth = 480
canvasHeight = 270
var x = [];
var y  = [];
    for (i=0; i < canvasWidth; i++){
        x[i] = []
        y[i] = []
    }
    for (i=0; i < canvasWidth; i++){
        for (j=0; j < canvasHeight; j++){
            var randomY2 = Math.floor(Math.random() * 4) + 1;
            var random = Math.floor(Math.random() * 400) + 1;
            var random2 = Math.floor(Math.random() * 100) + 1;
            var random3 = Math.floor(Math.random() * 100) + 1;
            var random4 = Math.floor(Math.random() * 3) + 1;
            var random5 = Math.floor(Math.random() * 3) + 1;
            var random6 = Math.floor(Math.random() * 3) + 1;
            var random7 = Math.floor(Math.random() * 3) + 1;
            var random8 = Math.floor(Math.random() * 3) + 1;
            var random9 = Math.floor(Math.random() * 3) + 1;
            x[i][j] = random;
        }
    }
    console.log(x[7][24]);
    for (i=0; i < canvasWidth; i++){
        for (j=0; j < canvasHeight; j++){
            var randomCanvas = Math.floor(Math.random() * 400) + 1;
            y[i][j] = randomCanvas;
        }
    }
    console.log(y[45][106]);
    for (i=1; i < canvasWidth - 1; i++){
        for (j=1; j < canvasHeight - 1; j++){
        var randomCanvas3 = Math.floor(Math.random() * 400) + 1;
        var numLand2 = 0
        var Outof42 = Math.floor(Math.random() * 4) + 1;
        var flipCoin2 = Math.floor(Math.random() * 2) + 1;
        if (x[i][j] <= 100){
            numLand2++;
        }
        if (x[i+1][j] <= 100){
            numLand2++;
        }
        if (x[i][j+1] <= 100){
            numLand2++;
        }
        if (x[i+1][j+1] <= 100){
            numLand2++
        } 
        if ( numLand2 >= 0){
            randomCanvas3 = Math.floor(Math.random() * 9500) + 100;
        }
        if ( numLand2 == 1){
            var outOf42 = Math.floor(Math.random() * 4) + 1;
            randomCanvas3 = Math.floor(Math.random() * 100) + 1;
            
        }
        if ( numLand2 == 2){
            if (flipCoin2 < 2){
                randomCanvas3 = Math.floor(Math.random() * 100) + 1;
            }
        }
        if (numLand2 == 3){
            if (Outof42 < 4){
                randomCanvas3 = Math.floor(Math.random() * 100) + 1;
            }
        }
        if (numLand2 >= 4){
            randomCanvas3 = Math.floor(Math.random() * 100) + 1;
        }                
        }
    }
    console.log(randomCanvas3);

