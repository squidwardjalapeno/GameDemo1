// World Generation 1.0
// Number between 1 and 100
    var landType
    var biomeType
    var terrainType
    var rarity
    var numMiningCamp
    var numSettlement
    var numRaiderCamp
    var numTown
    var numDungeon
    var numCastle
    var random = Math.floor(Math.random() * 400) + 1;
    var random2 = Math.floor(Math.random() * 100) + 1;
    var random3 = Math.floor(Math.random() * 100) + 1;
    var random4 = Math.floor(Math.random() * 3) + 1;
    var random5 = Math.floor(Math.random() * 3) + 1;
    var random6 = Math.floor(Math.random() * 3) + 1;
    var random7 = Math.floor(Math.random() * 3) + 1;
    var random8 = Math.floor(Math.random() * 3) + 1;
    var random9 = Math.floor(Math.random() * 3) + 1;
function testRng(newNumber){
    for (i=0; i < newNumber; i++){
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
    for (i=0; i < newNumber; i++){
        if (random2 <= 24) {
            terrainType = 1;
        }
        if (random2 > 24 && random2 <= 69){
            terrainType = 2;
        }
        if (random2 > 69 && random2 <= 100) {
            terrainType = 3;
        }
    }
    for (i=0; i < newNumber; i++) {
        if (random3 <= 75){
            rarity = 1;
        }
        if (random3 > 75 && random3 <= 95){
            rarity = 2;
        }
        if (random3 > 95 && random3 <= 99){
            rarity = 3;
        }
        if (random3 > 99 && random3 <= 100){
            rarity = 4;
        }

    }
    for (i=0; i < newNumber; i++) {
        if (rarity = 1){
            if (random4 < 3){
                numSettlement = 0;
            }
            else { numSettlement = 1}
            
        }
        if (rarity = 2){
            if (random4 < 3){
                numMiningCamp = 1;
            }
            else { numMiningCamp = 2}
            for (i=0; i < newNumber; i++) {
            if (random5 < 3) {
                numRaiderCamp = 0;
            }
            else { numRaiderCamp = 1}    
            }
            }
        }
        if (rarity = 3){
            if (random4 < 3){
                numTown = 0;
            }
            else { numTown = 1}
            if (random5 < 3 && numTown == 0){
                numSettlement = 1
            }
            if (random5 < 3 && numTown == 1){
                numSettlement = 0
            }
            else { 
                if(numTown = 0){
                    numSettlement = 2
                    }
                if(numTown = 1){
                    numSettlement = 1
                    }
                }
            for (i=0; i < newNumber; i++){
            if (random6 < 3){
                numRaiderCamp = 1
            }
            else { numRaiderCamp = 2}
            }
            for (i=0; i < newNumber; i++){
            if (random7 < 3){
                numDungeon = 0
            }
            else { numDungeon = 1}
            }
            for (i=0; i < newNumber; i++){
            if (random8 < 3){
                numMiningCamp = 2
            }
            else { numMiningCamp = 3}
            }
        }
        if (rarity = 4){
            if (random4 < 3){
                numCastle = 0
            }
            else { numCastle = 1}
            if (random5 < 3 && numCastle == 0){
                numTown = 1;
            }
            if (random5 < 3 && numCastle == 1){
                numTown = 0;
            }
            else { 
                if (numCastle = 0){
                numTown = 2
                }
                if (numCastle = 1){
                numTown = 1
                }
            }
            if (random6 < 3){
                if (random5 < 3){
                    if (random4 < 3){
                        numSettlement = 1;
                    }
                    else { numSettlement = 1}
                }
                else {
                    if (random4 < 3){
                        numSettlement = 0;
                    }
                    else { numSettlement = 0}
                }
            }
            else {
                if (random5 < 3){
                    if (random4 < 3){
                        numSettlement = 2;
                    }
                    else { numSettlement = 2}
                }
                else {
                    if (random4 < 3){
                        numSettlement = 1;
                    }
                    else { numSettlement = 1}
                }
            }
            if (random7 < 3){
                numMiningCamp = 3;
            }
            else { numMiningCamp = 4}
            if (random8 < 3){
                numDungeon = 1;
            }
            else { numDungeon = 2}
            for (i=0; i < newNumber; i++){
            if (random9 < 3){
                numRaiderCamp = 2;
            }
            else (numRaiderCamp = 3);
            }
        }
    }
}

testRng(10);
console.log(landType, biomeType, terrainType, rarity, numMiningCamp, numSettlement, numRaiderCamp, numTown, numDungeon, numCastle);
console.log(random, random2, random3, random4, random5, random6, random7, random8, random9);



