	// JavaScript code goes here
    var canvasWidth = 160
    var canvasHeight = 90
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
                if (random > 100){
                    landType = 1;
                }
                else { landType = 2;
                } 
                if (landType = 1){
                if (random > 388 && random <= 400){
                ctx.fillStyle = ('aqua');
                }
                if (random >= 373 && random <= 388){
                ctx.fillStyle = ('aqua');
                }
                else { ctx.fillStyle = ('aqua');
                }
            }
            if (landType = 2){
                if (random <= 25){
                    ctx.fillStyle = ('khaki');
                }
                if (random > 25 && random <= 31){
                    ctx.fillStyle = ('magenta');
                }
                if (random > 31 && random <= 37){
                    ctx.fillStyle = ('green');
            }
            if (random > 37 && random <= 50){
                ctx.fillStyle = ('darkgreen');
            }
            if (random > 50 && random <= 64){
                ctx.fillStyle = ('forestgreen');
            }
            if (random > 64 && random <= 74) {
                ctx.fillStyle = ('white');
            }
            if (random > 74 && random <= 90) {
                ctx.fillStyle = ('sandybrown');
            }
            if (random > 90 && random <= 97) {
                ctx.fillStyle = ('lawngreen');
            }
            if (random > 97 && random <= 100) {
                ctx.fillStyle = ('blue');
            }
            x[i][j] = random;
        }
        // First Columns
                ctx.fillRect(i * 24, j * 12, 6, 12);
                ctx.fillRect(i * 24 + 6, j * 12 + 3, 4, 6);
                ctx.fillRect(i * 24 - 4, j * 12 + 3, 4, 6);
                ctx.fillRect(i * 24 - 6, j * 12 + 5, 2, 2);
                ctx.fillRect(i * 24 + 10, j * 12 + 5, 2, 2);
                ctx.fillRect(i * 24 - 1, j * 12 + 1, 1, 2);
                ctx.fillRect(i * 24 - 1, j * 12 + 9, 1, 2);
                ctx.fillRect(i * 24 + 6, j * 12 + 1, 1, 2);
                ctx.fillRect(i * 24 + 6, j * 12 + 9, 1, 2);
                ctx.fillRect(i * 24 - 5, j * 12 + 4, 1, 1);
                ctx.fillRect(i * 24 - 5, j * 12 + 7, 1, 1);
                ctx.fillRect(i * 24 - 2, j * 12 + 2, 1, 1);
                ctx.fillRect(i * 24 - 2, j * 12 + 9, 1, 1);
                ctx.fillRect(i * 24 + 7, j * 12 + 2, 1, 1);
                ctx.fillRect(i * 24 + 7, j * 12 + 9, 1, 1);
                ctx.fillRect(i * 24 + 10, j * 12 + 4, 1, 1);
                ctx.fillRect(i * 24 + 10, j * 12 + 7, 1, 1);
                //second rows
               
        }
    }
    for (i=0; i < canvasWidth; i++){
            for (j=0; j < canvasHeight; j++){
                var randomCanvas = Math.floor(Math.random() * 400) + 1;
                if (randomCanvas > 100){
                    landType = 1;
                }
                else { landType = 2;
                } 
                if (landType = 1){
                if (randomCanvas > 388 && randomCanvas <= 400){
                ctx.fillStyle = ('aqua');
                }
                if (randomCanvas >= 373 && randomCanvas <= 388){
                ctx.fillStyle = ('aqua');
                }
                else { ctx.fillStyle = ('aqua');
                }
                }
                if (landType = 2){
                if (randomCanvas <= 25){
                    ctx.fillStyle = ('khaki');
                }
                if (randomCanvas > 25 && randomCanvas <= 31){
                    ctx.fillStyle = ('magenta');
                }
                if (randomCanvas > 31 && randomCanvas <= 37){
                    ctx.fillStyle = ('green');
            }
            if (randomCanvas > 37 && randomCanvas <= 50){
                ctx.fillStyle = ('darkgreen');
            }
            if (randomCanvas > 50 && randomCanvas <= 64){
                ctx.fillStyle = ('forestgreen');
            }
            if (randomCanvas > 64 && randomCanvas <= 74) {
                ctx.fillStyle = ('white');
            }
            if (randomCanvas > 74 && randomCanvas <= 90) {
                ctx.fillStyle = ('sandybrown');
            }
            if (randomCanvas > 90 && randomCanvas <= 97) {
                ctx.fillStyle = ('lawngreen');
            }
            if (randomCanvas > 97 && randomCanvas <= 100) {
                ctx.fillStyle = ('blue');
            }
            y[i][j] = randomCanvas
            }
                ctx.fillRect(i * 24 + 12, j * 12 - 6, 6, 12);
                ctx.fillRect(i * 24 + 18, j * 12 - 3, 4, 6);
                ctx.fillRect(i * 24 + 8, j * 12 - 3, 4, 6);
                ctx.fillRect(i * 24 + 6, j * 12 - 1, 2, 2);
                ctx.fillRect(i * 24 + 22, j * 12 - 1, 2, 2);
                ctx.fillRect(i * 24 + 11, j * 12 - 5, 1, 2);
                ctx.fillRect(i * 24 + 11, j * 12 + 3, 1, 2);
                ctx.fillRect(i * 24 + 18, j * 12 - 5, 1, 2);
                ctx.fillRect(i * 24 + 18, j * 12 + 3, 1, 2);
                ctx.fillRect(i * 24 + 7, j * 12 - 2, 1, 1);
                ctx.fillRect(i * 24 + 7, j * 12 + 1, 1, 1);
                ctx.fillRect(i * 24 + 10, j * 12 - 4, 1, 1);
                ctx.fillRect(i * 24 + 10, j * 12 + 3, 1, 1);
                ctx.fillRect(i * 24 + 19, j * 12 - 4, 1, 1);
                ctx.fillRect(i * 24 + 19, j * 12 + 3, 1, 1);
                ctx.fillRect(i * 24 + 22, j * 12 - 2, 1, 1);
                ctx.fillRect(i * 24 + 22, j * 12 + 1, 1, 1);
            }
        }
    for (i=0; i < canvasWidth; i++){
        for (j=0; j < canvasHeight; j++){
        var flipCoin = Math.floor(Math.random() * 2) + 1;
        var outOf4 = Math.floor(Math.random() * 4) + 1;
        var numWater = 0
                if (x[i][j] > 100){
                    if (x[i][j-1] > 100){
                        if (x[i+1][j] > 100){
                            if (x[i+1][j-1] > 100){
                                numWater++;
                            }
                        numWater++;
                        }
                    numWater++;
                    }
                numWater++;
                }
                if (numWater <= 0){
                    randomCanvas = Math.floor(Math.random() * 100) + 1;
                }
                if (numWater == 1){
                    if ( outOf4 < 4){
                    randomCanvas = Math.floor(Math.random() * 100) + 1;
                    }
                }
                if (numWater == 3){
                    if ( outOf4 < 4){
                    randomCanvas = Math.floor(Math.random() * 300) + 100;
                    }
                }
                if (numWater >= 4){
                    randomCanvas = Math.floor(Math.random() * 300) + 100;
                }
                if (randomCanvas > 100){
                    landType = 1;
                }
                else { landType = 2;
                } 
                if (landType = 1){
                if (randomCanvas > 388 && randomCanvas <= 400){
                ctx.fillStyle = ('aqua');
                }
                if (randomCanvas >= 373 && randomCanvas <= 388){
                ctx.fillStyle = ('aqua');
                }
                else { ctx.fillStyle = ('aqua');
                }
                }
                if (landType = 2){
                if (randomCanvas <= 25){
                    ctx.fillStyle = ('khaki');
                }
                if (randomCanvas > 25 && randomCanvas <= 31){
                    ctx.fillStyle = ('magenta');
                }
                if (randomCanvas > 31 && randomCanvas <= 37){
                    ctx.fillStyle = ('green');
            }
            if (randomCanvas > 37 && randomCanvas <= 50){
                ctx.fillStyle = ('darkgreen');
            }
            if (randomCanvas > 50 && randomCanvas <= 64){
                ctx.fillStyle = ('forestgreen');
            }
            if (randomCanvas > 64 && randomCanvas <= 74) {
                ctx.fillStyle = ('white');
            }
            if (randomCanvas > 74 && randomCanvas <= 90) {
                ctx.fillStyle = ('sandybrown');
            }
            if (randomCanvas > 90 && randomCanvas <= 97) {
                ctx.fillStyle = ('lawngreen');
            }
            if (randomCanvas > 97 && randomCanvas <= 100) {
                ctx.fillStyle = ('blue');
            }
            }
                ctx.fillRect(i * 24, j * 12, 6, 12);
                ctx.fillRect(i * 24 + 6, j * 12 + 3, 4, 6);
                ctx.fillRect(i * 24 - 4, j * 12 + 3, 4, 6);
                ctx.fillRect(i * 24 - 6, j * 12 + 5, 2, 2);
                ctx.fillRect(i * 24 + 10, j * 12 + 5, 2, 2);
                ctx.fillRect(i * 24 - 1, j * 12 + 1, 1, 2);
                ctx.fillRect(i * 24 - 1, j * 12 + 9, 1, 2);
                ctx.fillRect(i * 24 + 6, j * 12 + 1, 1, 2);
                ctx.fillRect(i * 24 + 6, j * 12 + 9, 1, 2);
                ctx.fillRect(i * 24 - 5, j * 12 + 4, 1, 1);
                ctx.fillRect(i * 24 - 5, j * 12 + 7, 1, 1);
                ctx.fillRect(i * 24 - 2, j * 12 + 2, 1, 1);
                ctx.fillRect(i * 24 - 2, j * 12 + 9, 1, 1);
                ctx.fillRect(i * 24 + 7, j * 12 + 2, 1, 1);
                ctx.fillRect(i * 24 + 7, j * 12 + 9, 1, 1);
                ctx.fillRect(i * 24 + 10, j * 12 + 4, 1, 1);
                ctx.fillRect(i * 24 + 10, j * 12 + 7, 1, 1);
        }
    }
    for (i=0; i < canvasWidth; i++){
        for (j=0; j < canvasHeight; j++){
        var flipCoin2 = Math.floor(Math.random() * 2) + 1;
        var outOf42 = Math.floor(Math.random() * 4) + 1;
        var numWater2 = 0
                if (y[i][j] > 100){
                    if (y[i][j-1] > 100){
                        if (y[i+1][j] > 100){
                            if (y[i+1][j-1] > 100){
                                numWater2++;
                            }
                        numWater2++;
                        }
                    numWater2++;
                    }
                numWater2++;
                }
                if (numWater2 <= 0){
                    randomCanvas = Math.floor(Math.random() * 100) + 1;
                }
                if (numWater2 == 1){
                    if ( outOf42 < 4){
                    randomCanvas = Math.floor(Math.random() * 100) + 1;
                    }
                }
                if (numWater2 == 3){
                    if ( outOf42 < 4){
                    randomCanvas = Math.floor(Math.random() * 300) + 100;
                    }
                }
                if (numWater2 >= 4){
                    randomCanvas = Math.floor(Math.random() * 300) + 100;
                }
                if (randomCanvas > 100){
                    landType = 1;
                }
                else { landType = 2;
                } 
                if (landType = 1){
                if (randomCanvas > 388 && randomCanvas <= 400){
                ctx.fillStyle = ('aqua');
                }
                if (randomCanvas >= 373 && randomCanvas <= 388){
                ctx.fillStyle = ('aqua');
                }
                else { ctx.fillStyle = ('aqua');
                }
                }
                if (landType = 2){
                if (randomCanvas <= 25){
                    ctx.fillStyle = ('khaki');
                }
                if (randomCanvas > 25 && randomCanvas <= 31){
                    ctx.fillStyle = ('magenta');
                }
                if (randomCanvas > 31 && randomCanvas <= 37){
                    ctx.fillStyle = ('green');
            }
            if (randomCanvas > 37 && randomCanvas <= 50){
                ctx.fillStyle = ('darkgreen');
            }
            if (randomCanvas > 50 && randomCanvas <= 64){
                ctx.fillStyle = ('forestgreen');
            }
            if (randomCanvas > 64 && randomCanvas <= 74) {
                ctx.fillStyle = ('white');
            }
            if (randomCanvas > 74 && randomCanvas <= 90) {
                ctx.fillStyle = ('sandybrown');
            }
            if (randomCanvas > 90 && randomCanvas <= 97) {
                ctx.fillStyle = ('lawngreen');
            }
            if (randomCanvas > 97 && randomCanvas <= 100) {
                ctx.fillStyle = ('blue');
            }
            }
            ctx.fillRect(i * 24, j * 12, 6, 12);
                ctx.fillRect(i * 24 + 6, j * 12 + 3, 4, 6);
                ctx.fillRect(i * 24 - 4, j * 12 + 3, 4, 6);
                ctx.fillRect(i * 24 - 6, j * 12 + 5, 2, 2);
                ctx.fillRect(i * 24 + 10, j * 12 + 5, 2, 2);
                ctx.fillRect(i * 24 - 1, j * 12 + 1, 1, 2);
                ctx.fillRect(i * 24 - 1, j * 12 + 9, 1, 2);
                ctx.fillRect(i * 24 + 6, j * 12 + 1, 1, 2);
                ctx.fillRect(i * 24 + 6, j * 12 + 9, 1, 2);
                ctx.fillRect(i * 24 - 5, j * 12 + 4, 1, 1);
                ctx.fillRect(i * 24 - 5, j * 12 + 7, 1, 1);
                ctx.fillRect(i * 24 - 2, j * 12 + 2, 1, 1);
                ctx.fillRect(i * 24 - 2, j * 12 + 9, 1, 1);
                ctx.fillRect(i * 24 + 7, j * 12 + 2, 1, 1);
                ctx.fillRect(i * 24 + 7, j * 12 + 9, 1, 1);
                ctx.fillRect(i * 24 + 10, j * 12 + 4, 1, 1);
                ctx.fillRect(i * 24 + 10, j * 12 + 7, 1, 1);
            } 
        }   
console.log(y[7][26]);