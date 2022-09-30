var landType 
var biomeType
var newNumber
var random

function findlandType(newNumber){
    for (i=0; i < newNumber; i++){
        var random = Math.floor(Math.random() * 400) + 1;
        if (random > 100){
        landType = 1;
    }
    else { landType = 2;
}
if (landType = 1){
    if (random > 388){
        biomeType = 1;
    }
    if (random >= 373 && random <= 388){
        biomeType = 2;
    }
    else { biomeType = 3;
    }
}
if (landType = 2){
    if (random <= 25){
        biomeType = 4;
    }
    if (random > 25 && random <= 31){
        biomeType = 5;
    }
    if (random > 31 && random <= 37){
        biomeType = 6;
    }
    if (random > 37 && random <= 50){
        biomeType = 7;
    }
    if (random > 50 && random <= 64){
        biomeType = 8;
    }
    if (random > 64 && random <= 74) {
        biomeType = 9;
    }
    if (random > 74 && random <= 90) {
        biomeType = 10;
    }
    if (random > 90 && random <= 97) {
        biomeType = 11;
    }
    if (random > 97 && random <= 100) {
        biomeType = 12;
    }

}
}
findlandType(1);
}
console.log(landType, biomeType);
