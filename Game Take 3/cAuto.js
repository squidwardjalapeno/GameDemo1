var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = [];
    var castle = {
        location: [],
        potatoes: [],
        corn: 100,
        population: "",
        storage: "",
        foodStorage: "",
        foodProduction: "",
        
        }

        
    var landType;
    var green;
    var darkGreen;
    var numAdjLand = 0;
    var test = 7;
    var numSettlements = 0;
    var numTowns = 0;
    var numCastles = 0;

    





        for (i=0; i < canvas.width; i++){
            x[i] = []
        }
        for (i=1; i < (canvas.width / 2) - 1; i++){
            for (j=1; j < (canvas.height / 2) - 1; j++){
                var random = Math.floor(Math.random() * 100) + 1;
                x[i][j] = random;
            }
        }
function cellularAutomata(){
    for (i=1; i < (canvas.width / 2) - 1; i++){
        for (j=1; j < (canvas.height / 2) - 1; j++){
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


function grouper(){
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
function interGrouper(){
grouper();
grouper();
grouper();
grouper();
grouper();

grouper();
grouper();
grouper();
grouper();
grouper();
}

interGrouper();
interGrouper();
interGrouper();
interGrouper();
interGrouper();

interGrouper();
interGrouper();
interGrouper();
interGrouper();
interGrouper();

interGrouper();
interGrouper();
interGrouper();
interGrouper();
interGrouper();

interGrouper();
interGrouper();
interGrouper();
interGrouper();
interGrouper();

interGrouper();
interGrouper();
interGrouper();
interGrouper();
interGrouper();






for (i=1; i < (canvas.width / 2) - 1; i++){
    for (j=1; j < (canvas.height / 2) - 1; j++){
        var randomCanvas4 = x[i][j];
        var superRandom = Math.floor(Math.random() * 2500) + 1;
        if (randomCanvas4 >= 67){
            
            ctx.fillStyle = 'darkgreen'
            ctx.fillRect(i * 1, j * 1, 1, 1);
            if( superRandom <= 4){
                ctx.fillStyle = 'red'
                ctx.fillRect(i * 1, j * 1, 1, 1);
                numTowns++;              
            }
            if( superRandom >= 80 && superRandom < 105){
                ctx.fillStyle = 'orange'
                ctx.fillRect(i * 1, j * 1, 1, 1);
                numSettlements++;
            }
            if( superRandom >= 2500){
                ctx.fillStyle = 'gold'
                ctx.fillRect(i * 1, j * 1, 1, 1);
                castle.location.push(i,j);
                potatoArray = Math.floor(Math.random() * 100) + 1
                castle.potatoes.push(potatoArray)
                numCastles++;
            }
    }
        else {
            ctx.fillStyle = 'blue'
            ctx.fillRect(i * 1, j * 1, 1, 1);
                                    
        }
    }
}           
        
    
    
    



