
var random = Math.floor(Math.random() * 400) + 1;
var random2 = Math.floor(Math.random() * 100) + 1;
var random3 = Math.floor(Math.random() * 100) + 1;
var random4 = Math.floor(Math.random() * 3) + 1;
var random5 = Math.floor(Math.random() * 3) + 1;
var random6 = Math.floor(Math.random() * 3) + 1;
var random7 = Math.floor(Math.random() * 3) + 1;
var random8 = Math.floor(Math.random() * 3) + 1;
var random9 = Math.floor(Math.random() * 3) + 1;




function findlandType(newDolla){
    for (i=0; i < newDolla; i++){
        //console.log(random, random2, random3, random4, random5, random6, random7, random8, random9);
    }
    if (random > 100){
        landType = 1;
    }
    else { landType = 2;
    } 
}
function findbiomeType(newDolla){
    for (i=0; i < newDolla; i++){
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
}
function findterrainType(newDolla){
    for (i=0; i < newDolla; i++){
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
}

function findScarcity(newDolla){
    for (i=0; i < newDolla; i++) {
        if (random3 > 0){
            scarcity = 1;
        }
        if (random3 > 75){
            scarcity = 2;
        }
        if (random3 > 95){
            scarcity = 3;
        }
        if (random3 > 99){
            scarcity = 4;
        }

    }
}
function findnumCiv(newDolla){
    for (i=0; i < newDolla; i++) {
        if (random3 <= 75){
            numMiningCamp = 1
            numRaiderCamp = 0
            numTown = 0
            numDungeon = 0
            numCastle = 0
            if (random4 < 3){
                numSettlement = 0;
            }
            else { numSettlement = 1}
            
        }
        if (random3 > 75 && random3 <= 95){
            if (random4 < 3){
                numMiningCamp = 1;
            }
            else { numMiningCamp = 2}
            for (i=0; i < newDolla; i++) {
            if (random5 < 3) {
                numRaiderCamp = 0;
            }
            else { numRaiderCamp = 1}    
            }
            numSettlement = 1
            numTown = 0
            numDungeon = 0
            numCastle = 0
        }
        if (random3 > 95 && random3 <= 99){
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
            for (i=0; i < newDolla; i++){
            if (random6 < 3){
                numRaiderCamp = 1
            }
            else { numRaiderCamp = 2}
            }
            for (i=0; i < newDolla; i++){
            if (random7 < 3){
                numDungeon = 0
            }
            else { numDungeon = 1}
            }
            for (i=0; i < newDolla; i++){
            if (random8 < 3){
                numMiningCamp = 2
            }
            else { numMiningCamp = 3}
            }
            numCastle = 0
        }
        if (random3 > 99 && random3 <= 100){
            if (random4 < 3){
                numCastle = 0
            }
            else { numCastle = 1}
            if (random5 < 3){
                if (random4 < 3){
                numTown = 1;
                }
                else { numTown = 0
                }
            }
            else { 
                if (random4 < 3){
                numTown = 2
                }
                else { numTown = 1
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
            for (i=0; i < newDolla; i++){
            if (random9 < 3){
                numRaiderCamp = 2;
            }
            else (numRaiderCamp = 3);
            }
        }
    }
}



    
findlandType(1);
findbiomeType(1);
findterrainType(1);
findScarcity(1);
findnumCiv(1);
//console.log(landType, biomeType, terrainType, scarcity, numMiningCamp, numSettlement, numRaiderCamp, numTown, numDungeon, numCastle);
console.log('%cLand Embarked!', 'color: black; background: white;');
if (random > 100){
    console.log('Your land type is ' + '%cwater', 'color: blue; background: cyan');
}
else { console.log('Your land type is ' + '%cland', 'color: green; background: greenyellow')
}
if (random > 388){
    console.log('There is a ' + '%cLarge Island', 'color: darkgreen; background: aqua;')
}
if (random > 373 && random <= 388){
    console.log('There are some ' + '%cSmall Islands', 'color: forestgreen; background: aqua;')
}
if (random > 100 && random <= 400){
    console.log('There is nothing but a ' + '%cDeep Sea', 'color: darkblue; background: darkcyan;')
}
if (random <= 25){
    console.log('Surrounding this area, there is a dry ' + '%cDesert', 'color: indianred; background: khaki;')
}
if (random > 25 && random <= 31){
    console.log('This area is muddied down by a thick ' + '%cSwamp', 'color: darkmagenta; background: darkolivegreen;')
}
if (random > 31 && random <= 37){
    console.log('Covering the area, there is a vast and humid ' + '%cJungle', 'color: lawngreen; background: green;')
}
if (random > 37 && random <= 50){
    console.log('It is full of vegetation, and there is a lush ' + '%cTemperate Forest', 'color: green; background: lightgreen;')
}
if (random > 50 && random <= 64){
    console.log('This place is surrounded by a large and brisk ' + '%cBoreal Forest', 'color: indigo; background: darkgreen;')
}
if (random > 64 && random <= 74){
    console.log('Frigid and void of vegetation, this land is a barren ' + '%cTundra', 'color: cyan; background: snow;')
}
if (random > 74 && random <= 90){
    console.log('With few trees and large meadows, it is a warm and dry ' + '%cSavannah', 'color: darkred; background: sandybrown;')
}
if (random > 90 && random <= 97){
    console.log('With no trees and sparse vegetation, this area is a simple ' + '%cGrassland', 'color: brown; background: greenyellow;')
}
if (random > 97 && random <= 100){
    console.log('It looks like most of this land is part of a ' + '%cLava Land', 'color: red; background: yellow;')
}
if (random <= 100){
    if(random2 <= 24){
        console.log('Terrain: ' + '%cMountain', 'color: darkslategrey; background: darkgrey;')
    }
    if(random2 > 24 && random2 <= 69){
        console.log('Terrain: ' + '%cPlateau', 'color: beige; background: darkkhaki;')
    }
    if(random2 > 69 && random2 <= 100){
        console.log('Terrain: ' + '%cFlat', 'color: darkgray; background: khaki;')
    }
    if(random3 <= 75){
        console.log('Rarity: ' + '%cCommon', 'color: grey; background: lightgrey;')
        if(random4 >= 3){
            console.log('Locations:')
            console.log('%cSettlement of Penis War', 'color: deeppink; background: darksalmon;')
        }
    }
    if(random3 > 75 && random3 <= 95){
        console.log('Rarity: ' + '%cRare', 'color: darkblue; background: deepskyblue;')
        console.log('Locations:')
        console.log('%cSettlement of Boge Dush', 'color: green; background: lightgrey')
    }
    if(random3 > 95 && random3 <= 99){
        console.log('Rarity: ' + '%cEpic', 'color: fuchsia; background: darkviolet;')
        console.log('Locations:')
        if(random4 < 3){
            if(random5 < 3){
                console.log('%cSettlement of Pussy Pimp', 'color: magenta; background: white;')
            }
            else { console.log('%cSettlement of Playboy Cumlaut', 'color: darkgrey; background: violet')
                    console.log('%cSettlement of John BockCock', 'color: green; background: greenyellow')
            }
        }
        else { if(random5 < 3){
                console.log('%cTown of Jolly Shit', 'color: hotpink; background: saddlebrown;')
        }
                else { console.log('%cTown of Prostitution', 'color: black; background: red;')
                        console.log('%cSettlement of Thick Jimmy', 'color: black; background: lightsalmon;')
                }
            
        }
    }
    if(random3 > 99 && random3 <= 100){
        console.log('Rarity: ' + '%cLegendary', 'color: goldenrod; background: gold;')
        console.log('Locations:')
        if(random4 < 3){
            if (random5 < 3){
                if (random6 < 3){
                    console.log('%cTown of MaybeVille', 'color: yellow; background: blue;')
                    console.log('%cSettlement of Cunt House', 'color: red; background: darkgrey;')
                }
                else { console.log('%cTown of MaybeVille', 'color: yellow; background: blue;')
                        console.log('%cSettlement of Cunt House', 'color: red; background: darkgrey;')
                        console.log('%cSettlement of Tittyporn', 'color: saddlebrown; background: hotpink;')
                }
            }
            else { if(random6 < 3){
                console.log('%cTown of MaybeVille', 'color: yellow; background: blue;')
                console.log('%cTown of Racism', 'color: black; background: white;')
            }
            else { console.log('%cTown of MaybeVille', 'color: yellow; background: blue;')
            console.log('%cTown of Racism', 'color: black; background: white;')
            console.log('%cSettlement of Tittyporn', 'color: saddlebrown; background: hotpink;')
                }
            }
        }
        else { if(random5 < 3){
                if(random6 < 3){
                    console.log('%cCastle of Dickfad', 'color: lightgrey; background: grey')
                    console.log('%cSettlement of Tittyporn', 'color: saddlebrown; background: hotpink;')
                }
                else { console.log('%cCastle of Dickfad', 'color: lightgrey; background: grey')
                      console.log('%cSettlement of Tittyporn', 'color: saddlebrown; background: hotpink;')
                        console.log('%cSettlement of Waga Simp', 'color: salmon; background: white;')
                }
            }
            else { if(random6 < 3){
                console.log('%cCastle of Dickfad', 'color: lightgrey; background: grey')
                console.log('%cTown of MaybeVille', 'color: yellow; background: blue;')
                }
                else { console.log('%cCastle of Dickfad', 'color: lightgrey; background: grey')
                console.log('%cTown of MaybeVille', 'color: yellow; background: blue;')
                console.log('%cSettlement of Waga Simp', 'color: salmon; background: white;')
                }
            }
        }
    }
}