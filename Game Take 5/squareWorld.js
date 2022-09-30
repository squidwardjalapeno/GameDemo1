const titleInput1 = document.querySelector(".title-input-1");
const consoleInput1 = document.querySelector(".wrapper-input-1");

const consoleInput2 = document.querySelector(".wrapper-input-2");
const consoleInput3 = document.querySelector(".wrapper-input-3");
const titleInput2 = document.querySelector(".title-input-2");
const consoleInput4 = document.querySelector(".wrapper-input-4");

const consoleInput5 = document.querySelector(".wrapper-input-5");
const consoleInput6 = document.querySelector(".wrapper-input-6");
const titleInput3 = document.querySelector(".title-input-3");
const consoleInput7 = document.querySelector(".wrapper-input-7");

const consoleInput8 = document.querySelector(".wrapper-input-8");
const consoleInput9 = document.querySelector(".wrapper-input-9");
const titleInput4 = document.querySelector(".title-input-4");
const consoleInput10 = document.querySelector(".wrapper-input-10");
const consoleInput11 = document.querySelector(".wrapper-input-11");
const consoleInput12 = document.querySelector(".wrapper-input-12");
const consoleInput13 = document.querySelector(".wrapper-input-13");
const consoleInput14 = document.querySelector(".wrapper-input-14");
const consoleInput15 = document.querySelector(".wrapper-input-15");
const consoleInput16 = document.querySelector(".wrapper-input-16");
const consoleInput17 = document.querySelector(".wrapper-input-17");
const consoleInput18 = document.querySelector(".wrapper-input-18");
const consoleInput19 = document.querySelector(".wrapper-input-19");

const backInput1 = document.querySelector(".back-input-1");

const historyContainer = document.querySelector(".wrapper-history")
const consoleBox = document.querySelector(".wrapper-class");

consoleInput1.innerHTML = "Embark";                                
consoleInput2.innerHTML = "Items";
consoleInput3.innerHTML = "Buildings";

function addResult(inputAsString, outputAsString) {
    const inputLogElement = document.createElement("div");
    const outputLogElement = document.createElement("div");

    inputLogElement.classList.add("wrapper-input-log");
    outputLogElement.classList.add("wrapper-output-log");

    historyContainer.append(inputLogElement, outputLogElement);

    inputLogElement.textContent = inputAsString;
    outputLogElement.textContent = outputAsString;



}

function addItem(nameAsString, eatAsString, useAsString, discardAsString) {
    const itemName = document.createElement("div");
    const itemEat = document.createElement("div");
    const itemUse = document.createElement("div");
    const itemDiscard = document.createElement("div");

    itemName.classList.add("wrapper-input-item1");
    itemEat.classList.add("wrapper-input-item2");
    itemUse.classList.add("wrapper-input-item3");
    itemDiscard.classList.add("wrapper-input-item4");

    consoleBox.append(itemName, itemEat, itemUse, itemDiscard);

    itemName.textContent = nameAsString;
    itemEat.textContent = eatAsString;
    itemUse.textContent = useAsString;
    itemDiscard.textContent = discardAsString;



}
/*
var posX = 2;
var posY = 5;
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


*/



var selection = 0;
var selection2 = 0;
var itemName;
var timeBoolean = false;
var integerValue = 0;
var itemBooleanSwitch = false;





function boxSelector() {
    if (selection == 0){
        if ( integerValue == 4 || integerValue == 5 || integerValue == 7){
        consoleInput1.style.fontWeight = 'bold';
        backInput1.style.fontWeight = 'normal';
        }
        if ( integerValue == 6){
        consoleInput1.style.fontWeight = 'bold';
        consoleInput2.style.fontWeight = 'normal';
        }


        else {
        consoleInput1.style.fontWeight = 'bold';
        consoleInput2.style.fontWeight = 'normal';
       
        consoleInput4.style.fontWeight = 'normal';
        consoleInput5.style.fontWeight = 'normal'; 
        } 
           
    }
    if (selection == 1){
        if ( integerValue == 4 || integerValue == 5 || integerValue == 7){
        consoleInput1.style.fontWeight = 'normal';
        backInput1.style.fontWeight = 'bold';

        

        }
        if ( integerValue == 6){
            consoleInput1.style.fontWeight = 'normal';
            consoleInput2.style.fontWeight = 'bold';
            consoleInput3.style.fontWeight = 'normal';


        

        }
        else {
        consoleInput1.style.fontWeight = 'normal';
        consoleInput2.style.fontWeight = 'bold';
        consoleInput3.style.fontWeight = 'normal';
        consoleInput4.style.fontWeight = 'normal';
        consoleInput5.style.fontWeight = 'normal'; 
        consoleInput6.style.fontWeight = 'normal';
        }  
    }
    if (selection == 2){
        
            if ( integerValue == 6){
                consoleInput1.style.fontWeight = 'normal';
                consoleInput2.style.fontWeight = 'normal';
                consoleInput3.style.fontWeight = 'bold';
                backInput1.style.fontWeight = 'normal';
    
    
            
    
            }
            else {

            
        consoleInput1.style.fontWeight = 'normal';
        consoleInput2.style.fontWeight = 'normal';
        consoleInput3.style.fontWeight = 'bold';
        consoleInput4.style.fontWeight = 'normal';
        consoleInput6.style.fontWeight = 'normal';  
        consoleInput7.style.fontWeight = 'normal'; 
            }
    }
    if (selection == 3){

        if ( integerValue == 6){
            consoleInput1.style.fontWeight = 'normal';
            consoleInput2.style.fontWeight = 'normal';
            consoleInput3.style.fontWeight = 'normal';
            backInput1.style.fontWeight = 'bold';


        

        }


        if ( integerValue == 2 || integerValue == 3){
            consoleInput1.style.fontWeight = 'normal';
            consoleInput2.style.fontWeight = 'normal';
            consoleInput3.style.fontWeight = 'normal';
            consoleInput4.style.fontWeight = 'bold';
            consoleInput5.style.fontWeight = 'normal';
            consoleInput7.style.fontWeight = 'normal';
            consoleInput8.style.fontWeight = 'normal';   
            }

        if ( integerValue == 1){
        consoleInput1.style.fontWeight = 'normal';
        consoleInput2.style.fontWeight = 'normal';
        consoleInput3.style.fontWeight = 'normal';
        consoleInput4.style.fontWeight = 'bold';
        }
        
        if (integerValue == 0){
            selection = 2;
        }


        
    }
    if (selection == 4){

        if ( integerValue == 2 || integerValue == 3){
        consoleInput1.style.fontWeight = 'normal';
        consoleInput2.style.fontWeight = 'normal';
        consoleInput3.style.fontWeight = 'normal';
        consoleInput4.style.fontWeight = 'normal';
        consoleInput5.style.fontWeight = 'bold';
        consoleInput6.style.fontWeight = 'normal';
        consoleInput8.style.fontWeight = 'normal'; 
        consoleInput9.style.fontWeight = 'normal'; 
        }
        
        else{
            selection = 3;
        }

        
    }
    if (selection == 5){

        if ( integerValue == 2 || integerValue == 3){
        consoleInput6.style.fontWeight = 'bold';
        consoleInput2.style.fontWeight = 'normal';
        consoleInput3.style.fontWeight = 'normal';
        consoleInput4.style.fontWeight = 'normal';
        consoleInput5.style.fontWeight = 'normal';
        consoleInput7.style.fontWeight = 'normal';
        consoleInput9.style.fontWeight = 'normal'; 
        consoleInput10.style.fontWeight = 'normal';
        }
        
        else{
            selection = 3;
        }

        
    }
    if (selection == 6){

        if ( integerValue == 2 || integerValue == 3){
        consoleInput6.style.fontWeight = 'normal';
        consoleInput7.style.fontWeight = 'bold';
        consoleInput8.style.fontWeight = 'normal';
        consoleInput3.style.fontWeight = 'normal';
        consoleInput4.style.fontWeight = 'normal';
        consoleInput5.style.fontWeight = 'normal';
        consoleInput10.style.fontWeight = 'normal'; 
        consoleInput11.style.fontWeight = 'normal'; 
        }
        
        else{
            selection = 3;
        }

        
    }
    if (selection == 7){

        if ( integerValue == 2 || integerValue == 3){
        consoleInput6.style.fontWeight = 'normal';
        consoleInput7.style.fontWeight = 'normal';
        consoleInput8.style.fontWeight = 'bold';
        consoleInput9.style.fontWeight = 'normal';
        consoleInput5.style.fontWeight = 'normal';
        consoleInput4.style.fontWeight = 'normal';
        consoleInput11.style.fontWeight = 'normal'; 
        consoleInput12.style.fontWeight = 'normal'; 
        }
        
        else{
            selection = 3;
        }

        
    }
    if (selection == 8){

        if ( integerValue == 2 || integerValue == 3){
        consoleInput5.style.fontWeight = 'normal';
        consoleInput6.style.fontWeight = 'normal';
        consoleInput7.style.fontWeight = 'normal';
        consoleInput8.style.fontWeight = 'normal';
        consoleInput9.style.fontWeight = 'bold';
        consoleInput10.style.fontWeight = 'normal';
        consoleInput12.style.fontWeight = 'normal'; 
        consoleInput13.style.fontWeight = 'normal';
        }
        
        else{
            selection = 3;
        }

        
    }
    if (selection == 9){

        if ( integerValue == 2 || integerValue == 3){
        consoleInput10.style.fontWeight = 'bold';
        consoleInput11.style.fontWeight = 'normal';
        
        consoleInput14.style.fontWeight = 'normal';
        consoleInput7.style.fontWeight = 'normal';
        consoleInput6.style.fontWeight = 'normal';
        consoleInput8.style.fontWeight = 'normal';
        consoleInput9.style.fontWeight = 'normal';
        backInput1.style.fontWeight = 'normal'; 
        }
        
        else{
            selection = 3;
        }

        
    }
    if (selection == 10){

        if ( integerValue == 2 || integerValue == 3){
        consoleInput7.style.fontWeight = 'normal';
        consoleInput8.style.fontWeight = 'normal';
        consoleInput9.style.fontWeight = 'normal';
        consoleInput10.style.fontWeight = 'normal';
        consoleInput11.style.fontWeight = 'bold';
        consoleInput12.style.fontWeight = 'normal';
        consoleInput15.style.fontWeight = 'normal';
        }
        
        else{
            selection = 3;
        }

        
    }
    if (selection == 11){

        if ( integerValue == 2 || integerValue == 3){
        consoleInput8.style.fontWeight = 'normal';
        consoleInput9.style.fontWeight = 'normal';
        consoleInput10.style.fontWeight = 'normal';
        consoleInput11.style.fontWeight = 'normal';
        consoleInput12.style.fontWeight = 'bold';
        backInput1.style.fontWeight = 'normal';
        consoleInput13.style.fontWeight = 'normal';
        consoleInput15.style.fontWeight = 'normal';
        consoleInput16.style.fontWeight = 'normal';
        }
        
        else{
            selection = 3;
        }

        
    }
    if (selection == 12){

        if ( integerValue == 2){
        backInput1.style.fontWeight = 'bold';
        consoleInput9.style.fontWeight = 'normal';
        consoleInput10.style.fontWeight = 'normal';
        consoleInput11.style.fontWeight = 'normal';
        consoleInput12.style.fontWeight = 'normal';
        consoleInput14.style.fontWeight = 'normal';
        consoleInput17.style.fontWeight = 'normal';
        }
        if ( integerValue == 3){
        consoleInput13.style.fontWeight = 'bold';
        consoleInput9.style.fontWeight = 'normal';
        consoleInput10.style.fontWeight = 'normal';
        consoleInput11.style.fontWeight = 'normal';
        consoleInput12.style.fontWeight = 'normal';
        consoleInput14.style.fontWeight = 'normal';
        consoleInput17.style.fontWeight = 'normal';
        } 

    }
    if (selection == 13){

        if ( integerValue == 2){
        selection = 12;
        }
        if ( integerValue == 3){
        consoleInput13.style.fontWeight = 'normal';
        consoleInput14.style.fontWeight = 'bold';
        consoleInput15.style.fontWeight = 'normal';
        consoleInput18.style.fontWeight = 'normal';
        consoleInput10.style.fontWeight = 'normal';
        consoleInput11.style.fontWeight = 'normal';
        consoleInput12.style.fontWeight = 'normal';
        } 
               
    }
    if (selection == 14){

        if ( integerValue == 2){
        selection = 12;
        }
        if ( integerValue == 3){
        consoleInput13.style.fontWeight = 'normal';
        consoleInput14.style.fontWeight = 'normal';
        consoleInput15.style.fontWeight = 'bold';
        consoleInput16.style.fontWeight = 'normal';
        consoleInput19.style.fontWeight = 'normal';
        consoleInput12.style.fontWeight = 'normal';
        consoleInput11.style.fontWeight = 'normal';
        } 
               
    }
    if (selection == 15){

        if ( integerValue == 2){
        selection = 12;
        }
        if ( integerValue == 3){
        consoleInput12.style.fontWeight = 'normal';
        consoleInput13.style.fontWeight = 'normal';
        consoleInput14.style.fontWeight = 'normal';
        consoleInput15.style.fontWeight = 'normal';
        consoleInput16.style.fontWeight = 'bold';
        consoleInput17.style.fontWeight = 'normal';
        backInput1.style.fontWeight = 'normal';
        } 
               
    }
    if (selection == 16){

        if ( integerValue == 2){
        selection = 12;
        }
        if ( integerValue == 3){
        consoleInput15.style.fontWeight = 'normal';
        consoleInput13.style.fontWeight = 'normal';
        consoleInput14.style.fontWeight = 'normal';
        consoleInput16.style.fontWeight = 'normal';
        consoleInput17.style.fontWeight = 'bold';
        consoleInput18.style.fontWeight = 'normal';
        } 
               
    }
    if (selection == 17){

        if ( integerValue == 2){
        selection = 12;
        }
        if ( integerValue == 3){
        consoleInput14.style.fontWeight = 'normal';
        consoleInput15.style.fontWeight = 'normal';
        consoleInput16.style.fontWeight = 'normal';
        consoleInput17.style.fontWeight = 'normal';
        consoleInput18.style.fontWeight = 'bold';
        consoleInput19.style.fontWeight = 'normal';
        } 
               
    }
    if (selection == 18){

        if ( integerValue == 2){
        selection = 12;
        }
        if ( integerValue == 3){
        consoleInput15.style.fontWeight = 'normal';
        consoleInput16.style.fontWeight = 'normal';
        consoleInput17.style.fontWeight = 'normal';
        consoleInput18.style.fontWeight = 'normal';
        consoleInput19.style.fontWeight = 'bold';
        backInput1.style.fontWeight = 'normal';
        } 
               
    }
    if (selection == 19){

        if ( integerValue == 2){
        selection = 12;
        }
        if ( integerValue == 3){
        consoleInput16.style.fontWeight = 'normal';
        consoleInput17.style.fontWeight = 'normal';
        consoleInput18.style.fontWeight = 'normal';
        consoleInput19.style.fontWeight = 'normal';
        backInput1.style.fontWeight = 'bold';
        }               
    }
    

}

    
    



addEventListener("keyup", e => {

    
    if (e.keyCode == "40") {    //DOWN
    
        if ( selection >= 20){
            console.log(selection);
        }
        else {
            if (integerValue == 3){
                selection += 4;
            }
            else {

            selection += 3;
            }
        }
        boxSelector();
        console.log(selection);
    }

    
    if (e.keyCode == "39") {    //RIGHT
    
        if ( selection >= 20){
            console.log(selection);
        }
        else {
            selection++;
        }
        boxSelector();
        console.log(selection);
    }

    if (e.keyCode == "38") {     //UP
    
        if ( selection <= 0){
            console.log(selection);
        }
        else {
            if (integerValue == 3){
                selection -= 4;
            }
            else {

            
            selection -= 3;
            }
        }
        boxSelector();
        console.log(selection);
    }

    if (e.keyCode == "37") {   //LEFT

        if ( selection <= 0){
            console.log(selection);
        }
        else {
            selection--;
        }
        boxSelector();
        console.log(selection);
    }
    
if ( integerValue == 0){
    if (e.key == "Enter") {
        
        
        
        


        if ( selection == 0){
            
            addResult("Embark", "which way shall we go?")
            console.log("which way shall we go?");
            consoleInput1.innerHTML = "North";
            consoleInput2.innerHTML = "East";
            consoleInput3.innerHTML = "South";
            consoleInput4.innerHTML = "West";
            consoleInput1.style.width = '25%';
            consoleInput2.style.width = '25%';
            consoleInput3.style.width = '25%';
            consoleInput4.style.width = '25%';
            integerValue = 1; 
            setTimeout(() => {
                timeBoolean = true;
              }, "1000")
            
              
        }
        if ( selection == 1){
            addResult("Items", "which items shall we use?")
            console.log("which items shall we use?");

            titleInput1.innerHTML = "Potatoes";
            titleInput1.style.width = '100%';

            consoleInput1.innerHTML = "Eat";                                
            consoleInput2.innerHTML = "Use";
            consoleInput3.innerHTML = "Discard";

            titleInput2.innerHTML = "Baked Potatoes";
            titleInput2.style.width = '100%';

            consoleInput4.innerHTML = "Eat";
            
            consoleInput5.innerHTML = "Use";          
            consoleInput6.innerHTML = "Discard";

            titleInput3.innerHTML = "Cloth";
            titleInput3.style.width = '100%';

            consoleInput7.innerHTML = "Eat";
            consoleInput8.innerHTML = "Use";
            consoleInput9.innerHTML = "Discard";

            titleInput4.innerHTML = "Seeds";
            titleInput4.style.width = '100%';
          
            consoleInput10.innerHTML = "Eat";
            consoleInput11.innerHTML = "Use";
            consoleInput12.innerHTML = "Discard";

            backInput1.innerHTML = "Back";
            backInput1.style.width = '25%';

            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            consoleInput4.style.width = '33.33%';
            consoleInput5.style.width = '33.33%';
            consoleInput6.style.width = '33.33%';
            consoleInput7.style.width = '33.33%';
            consoleInput8.style.width = '33.33%';
            consoleInput9.style.width = '33.33%';
            consoleInput10.style.width = '33.33%';
            consoleInput11.style.width = '33.33%';
            consoleInput12.style.width = '33.33%';

            integerValue = 2;
            setTimeout(() => {
                timeBoolean = true;
              }, "1000")

        }
        if ( selection == 2){
            addResult("Buildings", "which buildings shall we visit?")
            console.log("which building shall we visit?");

            consoleInput1.innerHTML = "House 1";
            consoleInput2.innerHTML = "House 2";
            consoleInput3.innerHTML = "House 3";
            consoleInput4.innerHTML = "House 4";
            consoleInput5.innerHTML = "House 5";
            consoleInput6.innerHTML = "House 6";
            consoleInput7.innerHTML = "House 7";
            consoleInput8.innerHTML = "House 8";
            consoleInput9.innerHTML = "House 9";
            consoleInput10.innerHTML = "House 10";
            consoleInput11.innerHTML = "House 11";
            consoleInput12.innerHTML = "Barn 1";
            consoleInput13.innerHTML = "Storage Room 1";
            consoleInput14.innerHTML = "Storage Room 2";
            consoleInput15.innerHTML = "General Shop 1";
            consoleInput16.innerHTML = "Animal Stables 1";
            consoleInput17.innerHTML = "Animal Stables 2";
            consoleInput18.innerHTML = "Cellar 1";
            consoleInput19.innerHTML = "Church 1";
            backInput1.innerHTML = "Back";
            

            consoleInput1.style.width = '25%';
            consoleInput2.style.width = '25%';
            consoleInput3.style.width = '25%';
            consoleInput4.style.width = '25%';
            consoleInput5.style.width = '25%';
            consoleInput6.style.width = '25%';
            consoleInput7.style.width = '25%';
            consoleInput8.style.width = '25%';
            consoleInput9.style.width = '25%';
            consoleInput10.style.width = '25%';
            consoleInput11.style.width = '25%';
            consoleInput12.style.width = '25%';
            consoleInput13.style.width = '25%';
            consoleInput14.style.width = '25%';
            consoleInput15.style.width = '25%';
            consoleInput16.style.width = '25%';
            consoleInput17.style.width = '25%';
            consoleInput18.style.width = '25%';
            consoleInput19.style.width = '25%';
            backInput1.style.width = '25%';
            

            integerValue = 3;

            setTimeout(() => {
                timeBoolean = true;
              }, "1000")
        }
        
        boxSelector();
        console.log(selection);
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }
}

if ( integerValue == 1){
    if (e.key == "Enter") {

    
        
        


        if ( selection == 0 && timeBoolean == true){
            addResult("North", "Embarked north")
            console.log("Embarked north");
            
            
            
            
              
        }
        if ( selection == 1){
            addResult("East", "Embarked east")
            console.log("Embarked east");
            consoleInput1.innerHTML = "Embark";
            consoleInput2.innerHTML = "Items";
            consoleInput3.innerHTML = "Buildings";
            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            consoleInput4.style.width = '33.33%';
            
            
            
            
            integerValue = 0;
            timeBoolean = false;          
            consoleInput4.innerHTML = "";

        }
        if ( selection == 2){
            addResult("South", "Embarked south")
            console.log("Embarked south");
            addItem("potatoes", "eat", "use", "discard");
        }
        if ( selection == 3){
            addResult("West", "Embarked west")
            console.log("Embarked west");
        }
       


        
        boxSelector();
        console.log(selection);
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }
}

if ( integerValue == 2){
    if (e.key == "Enter") {

    
        
        


        if ( selection == 0){
            addResult("Eat " + titleInput1.innerHTML, "How many " + titleInput1.innerHTML + " shall you eat?")
            console.log("How many " + titleInput1.innerHTML + " shall you eat?");
            itemName = titleInput1.innerHTML;

            titleInput1.innerHTML = "";
            titleInput1.style.width = '0%';

            consoleInput1.innerHTML = "Eat 1";
            consoleInput2.innerHTML = "";
            consoleInput3.innerHTML = "";
            titleInput2.innerHTML = "";
            titleInput2.style.width = '0%';
            consoleInput4.innerHTML = "";
            consoleInput5.innerHTML = "";
            consoleInput6.innerHTML = "";
            titleInput3.innerHTML = "";
            titleInput3.style.width = '0%';
            consoleInput7.innerHTML = "";
            consoleInput8.innerHTML = "";
            consoleInput9.innerHTML = "";
            titleInput4.innerHTML = "";
            titleInput4.style.width = '0%';
            consoleInput10.innerHTML = "";
            consoleInput11.innerHTML = "";
            consoleInput12.innerHTML = "";
            backInput1.innerHTML = "Back";
            consoleInput1.style.width = '50%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            backInput1.style.width = '50%';
         
            
            
            
            integerValue = 4;
            timeBoolean = false;          
            consoleInput4.innerHTML = "";

            setTimeout(() => {
                timeBoolean = true;
              }, "1000")


            
            
            
            
            
              
        }
        if ( selection == 1 && timeBoolean == true){
            addResult("Use " + titleInput1.innerHTML, "How Many " + titleInput1.innerHTML + " will you plant here?")
            console.log("How Many " + titleInput1.innerHTML + " will you plant here?");
            itemName = titleInput1.innerHTML;
            
            titleInput1.innerHTML = "";
            titleInput1.style.width = '0%';

            consoleInput1.innerHTML = "Plant 1";
            consoleInput2.innerHTML = "";
            consoleInput3.innerHTML = "";
            titleInput2.innerHTML = "";
            titleInput2.style.width = '0%';
            consoleInput4.innerHTML = "";
            consoleInput5.innerHTML = "";
            consoleInput6.innerHTML = "";
            titleInput3.innerHTML = "";
            titleInput3.style.width = '0%';
            consoleInput7.innerHTML = "";
            consoleInput8.innerHTML = "";
            consoleInput9.innerHTML = "";
            titleInput4.innerHTML = "";
            titleInput4.style.width = '0%';
            consoleInput10.innerHTML = "";
            consoleInput11.innerHTML = "";
            consoleInput12.innerHTML = "";
            backInput1.innerHTML = "Back";
            consoleInput1.style.width = '50%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            backInput1.style.width = '50%';
         
            
            
            
            integerValue = 5;
            timeBoolean = false;          
            consoleInput4.innerHTML = "";

            setTimeout(() => {
                timeBoolean = true;
              }, "1000")

        }
        if ( selection == 2){
            addResult("Discard " + titleInput1.innerHTML, "How Many " + titleInput1.innerHTML + " will you throw away?")
            console.log("How Many " + titleInput1.innerHTML + " will you throw away?");
            itemName = titleInput1.innerHTML;
            
            titleInput1.innerHTML = "";
            titleInput1.style.width = '0%';
            titleInput2.innerHTML = "";
            titleInput2.style.width = '0%';

            consoleInput1.innerHTML = "Discard 1";
            consoleInput2.innerHTML = "Discard Half";
            consoleInput3.innerHTML = "Discard All";
            
            backInput1.innerHTML = "Back";
            
            consoleInput4.innerHTML = "";
            consoleInput5.innerHTML = "";
            consoleInput6.innerHTML = "";
            titleInput3.innerHTML = "";
            titleInput3.style.width = '0%';
            consoleInput7.innerHTML = "";
            consoleInput8.innerHTML = "";
            consoleInput9.innerHTML = "";
            titleInput4.innerHTML = "";
            titleInput4.style.width = '0%';
            consoleInput10.innerHTML = "";
            consoleInput11.innerHTML = "";
            consoleInput12.innerHTML = "";
            
            
            consoleInput1.style.width = '25%';
            consoleInput2.style.width = '25%';
            consoleInput3.style.width = '25%';
            consoleInput4.style.width = '0%';
            consoleInput5.style.width = '0%';
            consoleInput6.style.width = '0%';
            consoleInput7.style.width = '0%';
            consoleInput8.style.width = '0%';
            consoleInput9.style.width = '0%';
            consoleInput10.style.width = '0%';
            consoleInput11.style.width = '0%';
            consoleInput12.style.width = '0%';
            
            
            backInput1.style.width = '25%';
         
            
            
            
            integerValue = 6;
            timeBoolean = false;          
            
            

            setTimeout(() => {
                timeBoolean = true;
              }, "1000")
        }
        if ( selection == 3){
            addResult("West", "which EatBpo sh4lrileywe go")
            console.log("which EatBpo... sh4lrileywe go");
        }
        if ( selection == 4){
            addResult("North2", "which UseBpo sh4lrileywe go")
            console.log("which UseBpo sh4lrileywe go");
            
            
            
            
              
        }
        if ( selection == 5){
            addResult("East2", "which DisBpo sh4lrileywe go")
            console.log("which DisBpo sh4lrileywe go");
            


            consoleInput1.innerHTML = "Embark";
            consoleInput2.innerHTML = "Items";
            consoleInput3.innerHTML = "Buildings";
            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            integerValue = 0;
            timeBoolean = false;          
            consoleInput4.innerHTML = "";

        }
        if ( selection == 6){
            addResult("South2", "which EatClo sh4lrileywe go")
            console.log("which EatClo... sh4lrileywe go");
        }
        if ( selection == 7){
            addResult("West2", "which  UseClo sh4lrileywe go")
            console.log("which UseClo... sh4lrileywe go");
        }
        if ( selection == 8){
            addResult("North3", "which DisClo sh4lrileywe go")
            console.log("which Disclo sh4lrileywe go");
            
            
            
            
              
        }
        if ( selection == 9){
            addResult("East3", "which EatSee sh4lrileywe go")
            console.log("which EatSee sh4lrileywe go");
            consoleInput1.innerHTML = "Embark";
            consoleInput2.innerHTML = "Items";
            consoleInput3.innerHTML = "Buildings";
            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            integerValue = 0;
            timeBoolean = false;          
            consoleInput4.innerHTML = "";

        }
        if ( selection == 10){
            addResult("South3", "which UseSee sh4lrileywe go")
            console.log("which UseSee... sh4lrileywe go");
        }
        if ( selection == 11){
            addResult("West3", "which DisSee sh4lrileywe go")
            console.log("which DisSee... sh4lrileywe go");
        }
        if ( selection == 12){
            addResult("Back", "which Back sh4lrileywe go")
            console.log("which Back... sh4lrileywe go");
        }
       


        
        boxSelector();
        console.log(selection);
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }
}

if ( integerValue == 3){
    if (e.key == "Enter") {

    
        
        


        if ( selection == 0 && timeBoolean == true){
            addResult("North", "which norty1b sh4lrileywe go")
            console.log("which 1bnorthie sh4lrileywe go");
            
            
            
            
              
        }
        if ( selection == 1){
            addResult("East", "which 2beesty sh4lrileywe go")
            console.log("which 2beesty sh4lrileywe go");
            titleInput1.innerHTML = "";
            titleInput1.style.width = '0%';

            consoleInput1.innerHTML = "Embark";
            consoleInput2.innerHTML = "Items";
            consoleInput3.innerHTML = "Buildings";
            titleInput2.innerHTML = "";
            titleInput2.style.width = '0%';
            consoleInput4.innerHTML = "";
            consoleInput5.innerHTML = "";
            consoleInput6.innerHTML = "";
            titleInput3.innerHTML = "";
            titleInput3.style.width = '0%';
            consoleInput7.innerHTML = "";
            consoleInput8.innerHTML = "";
            consoleInput9.innerHTML = "";
            titleInput4.innerHTML = "";
            titleInput4.style.width = '0%';
            consoleInput10.innerHTML = "";
            consoleInput11.innerHTML = "";
            consoleInput12.innerHTML = "";
            backInput1.innerHTML = "";
            consoleInput13.innerHTML = "";
            consoleInput14.innerHTML = "";
            consoleInput15.innerHTML = "";
            consoleInput16.innerHTML = "";
            consoleInput17.innerHTML = "";
            consoleInput18.innerHTML = "";
            consoleInput19.innerHTML = "";
            
            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            consoleInput4.style.width = '33.33%';
         
            
            
            
            integerValue = 0;
            timeBoolean = false;          
            consoleInput4.innerHTML = "";

        }
        if ( selection == 2){
            addResult("South", "which 3bsoutie sh4lrileywe go")
            console.log("which 3bsouty... sh4lrileywe go");
        }
        
       


        
        boxSelector();
        console.log(selection);
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }
}
if ( integerValue == 4){
    if (e.key == "Enter") {
        






        if ( selection == 0 && timeBoolean == true){
            addResult("Eat 1", "Ate 1 " + itemName);
            console.log("Ate 1 " + itemName);

            consoleInput1.innerHTML = "Embark";
            consoleInput2.innerHTML = "Items";
            consoleInput3.innerHTML = "Buildings";
            backInput1.innerHTML = "";
            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            backInput1.style.width = "0%";

            integerValue = 0;
            timeBoolean = false;          

            



        }

        if ( selection == 1 && timeBoolean == true){
            addResult("Back", "Back");
            console.log("Back");

            titleInput1.innerHTML = "Potatoes";
            titleInput1.style.width = '100%';

            consoleInput1.innerHTML = "Eat";                                
            consoleInput2.innerHTML = "Use";
            consoleInput3.innerHTML = "Discard";

            titleInput2.innerHTML = "Baked Potatoes";
            titleInput2.style.width = '100%';

            consoleInput4.innerHTML = "Eat";
            
            consoleInput5.innerHTML = "Use";          
            consoleInput6.innerHTML = "Discard";

            titleInput3.innerHTML = "Cloth";
            titleInput3.style.width = '100%';

            consoleInput7.innerHTML = "Eat";
            consoleInput8.innerHTML = "Use";
            consoleInput9.innerHTML = "Discard";

            titleInput4.innerHTML = "Seeds";
            titleInput4.style.width = '100%';
          
            consoleInput10.innerHTML = "Eat";
            consoleInput11.innerHTML = "Use";
            consoleInput12.innerHTML = "Discard";

            backInput1.innerHTML = "Back";
            backInput1.style.width = '100%';

            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            consoleInput4.style.width = '33.33%';
            consoleInput5.style.width = '33.33%';
            consoleInput6.style.width = '33.33%';
            consoleInput7.style.width = '33.33%';
            consoleInput8.style.width = '33.33%';
            consoleInput9.style.width = '33.33%';
            consoleInput10.style.width = '33.33%';
            consoleInput11.style.width = '33.33%';
            consoleInput12.style.width = '33.33%';

            integerValue = 2;
            setTimeout(() => {
                timeBoolean = true;
              }, "1000")



        }



        boxSelector();
        console.log(selection);
        historyContainer.scrollTop = historyContainer.scrollHeight;


    }
}

if ( integerValue == 5){
    if (e.key == "Enter") {






        if ( selection == 0 && timeBoolean == true){
            addResult("Plant 1", "Planted 1 " + itemName);
            console.log("Planted 1 " + itemName);

            consoleInput1.innerHTML = "Embark";
            consoleInput2.innerHTML = "Items";
            consoleInput3.innerHTML = "Buildings";
            backInput1.innerHTML = "";
            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            backInput1.style.width = "0%";

            integerValue = 0;
            timeBoolean = false;          

            



        }

        if ( selection == 1 && timeBoolean == true){
            addResult("Back", "Back");
            console.log("Back");

            titleInput1.innerHTML = "Potatoes";
            titleInput1.style.width = '100%';

            consoleInput1.innerHTML = "Eat";                                
            consoleInput2.innerHTML = "Use";
            consoleInput3.innerHTML = "Discard";

            titleInput2.innerHTML = "Baked Potatoes";
            titleInput2.style.width = '100%';

            consoleInput4.innerHTML = "Eat";
            
            consoleInput5.innerHTML = "Use";          
            consoleInput6.innerHTML = "Discard";

            titleInput3.innerHTML = "Cloth";
            titleInput3.style.width = '100%';

            consoleInput7.innerHTML = "Eat";
            consoleInput8.innerHTML = "Use";
            consoleInput9.innerHTML = "Discard";

            itemName.innerHTML = "Seeds";
            titleInput4.style.width = '100%';
          
            consoleInput10.innerHTML = "Eat";
            consoleInput11.innerHTML = "Use";
            consoleInput12.innerHTML = "Discard";

            backInput1.innerHTML = "Back";
            backInput1.style.width = '100%';

            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            consoleInput4.style.width = '33.33%';
            consoleInput5.style.width = '33.33%';
            consoleInput6.style.width = '33.33%';
            consoleInput7.style.width = '33.33%';
            consoleInput8.style.width = '33.33%';
            consoleInput9.style.width = '33.33%';
            consoleInput10.style.width = '33.33%';
            consoleInput11.style.width = '33.33%';
            consoleInput12.style.width = '33.33%';

            integerValue = 2;
            setTimeout(() => {
                timeBoolean = true;
              }, "1000")



        }



        boxSelector();
        console.log(selection);
        historyContainer.scrollTop = historyContainer.scrollHeight;

        
    }
}

if ( integerValue == 6){
    if (e.key == "Enter") {






        if ( selection == 0 && timeBoolean == true){
            addResult("Discard 1", "are you sure you want to discard " + itemName);
            console.log("discard 1 " + itemName);

            consoleInput1.innerHTML = "Yes";
            consoleInput2.innerHTML = "";
            consoleInput3.innerHTML = "";
            backInput1.innerHTML = "Back";
            consoleInput1.style.width = '50%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            backInput1.style.width = "50%";

            integerValue = 7;
            timeBoolean = false; 
            
            setTimeout(() => {
                timeBoolean = true;
              }, "1000")

            



        }

        if ( selection == 1 && timeBoolean == true){
            addResult("Discard Half", "are you sure you want to discard " + itemName);
            console.log("discard half");

            consoleInput1.innerHTML = "Yes";
            consoleInput2.innerHTML = "";
            consoleInput3.innerHTML = "";
            backInput1.innerHTML = "Back";
            consoleInput1.style.width = '50%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            backInput1.style.width = "50%";

            integerValue = 7;
            timeBoolean = false; 

            setTimeout(() => {
                timeBoolean = true;
              }, "1000")



        }

        if ( selection == 2 && timeBoolean == true){
            addResult("Discard All", "are you sure you want to discard " + itemName);
            console.log("discard All");

            consoleInput1.innerHTML = "Yes";
            consoleInput2.innerHTML = "";
            consoleInput3.innerHTML = "";
            backInput1.innerHTML = "Back";
            consoleInput1.style.width = '50%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            backInput1.style.width = "50%";

            integerValue = 7;
            timeBoolean = false; 

            setTimeout(() => {
                timeBoolean = true;
              }, "1000")



        }

        if ( selection == 3 && timeBoolean == true){
            addResult("Back", "Back");
            console.log("Back");

            titleInput1.innerHTML = "Potatoes";
            titleInput1.style.width = '100%';

            consoleInput1.innerHTML = "Eat";                                
            consoleInput2.innerHTML = "Use";
            consoleInput3.innerHTML = "Discard";

            titleInput2.innerHTML = "Baked Potatoes";
            titleInput2.style.width = '100%';

            consoleInput4.innerHTML = "Eat";
            
            consoleInput5.innerHTML = "Use";          
            consoleInput6.innerHTML = "Discard";

            titleInput3.innerHTML = "Cloth";
            titleInput3.style.width = '100%';

            consoleInput7.innerHTML = "Eat";
            consoleInput8.innerHTML = "Use";
            consoleInput9.innerHTML = "Discard";

            titleInput4.innerHTML = "Seeds";
            titleInput4.style.width = '100%';
          
            consoleInput10.innerHTML = "Eat";
            consoleInput11.innerHTML = "Use";
            consoleInput12.innerHTML = "Discard";

            backInput1.innerHTML = "Back";
            backInput1.style.width = '100%';

            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            consoleInput4.style.width = '33.33%';
            consoleInput5.style.width = '33.33%';
            consoleInput6.style.width = '33.33%';
            consoleInput7.style.width = '33.33%';
            consoleInput8.style.width = '33.33%';
            consoleInput9.style.width = '33.33%';
            consoleInput10.style.width = '33.33%';
            consoleInput11.style.width = '33.33%';
            consoleInput12.style.width = '33.33%';

            integerValue = 2;
            setTimeout(() => {
                timeBoolean = true;
              }, "1000")



        }



        boxSelector();
        console.log(selection);
        historyContainer.scrollTop = historyContainer.scrollHeight;

        
    }
}

if ( integerValue == 7){
    if (e.key == "Enter") {






        if ( selection == 0 && timeBoolean == true){
            addResult("Discard 1", "discarded 1 " + itemName);
            console.log("discarded 1 " + itemName);

            consoleInput1.innerHTML = "Embark";
            consoleInput2.innerHTML = "Items";
            consoleInput3.innerHTML = "Buildings";
            backInput1.innerHTML = "";
            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            backInput1.style.width = "0%";

            integerValue = 0;
            timeBoolean = false;          

            



        }

        if ( selection == 1 && timeBoolean == true){
            addResult("Back", "Back");
            console.log("Back");

            titleInput1.innerHTML = "Potatoes";
            titleInput1.style.width = '100%';

            consoleInput1.innerHTML = "Eat";                                
            consoleInput2.innerHTML = "Use";
            consoleInput3.innerHTML = "Discard";

            titleInput2.innerHTML = "Baked Potatoes";
            titleInput2.style.width = '100%';

            consoleInput4.innerHTML = "Eat";
            
            consoleInput5.innerHTML = "Use";          
            consoleInput6.innerHTML = "Discard";

            titleInput3.innerHTML = "Cloth";
            titleInput3.style.width = '100%';

            consoleInput7.innerHTML = "Eat";
            consoleInput8.innerHTML = "Use";
            consoleInput9.innerHTML = "Discard";

            titleInput4.innerHTML = "Seeds";
            titleInput4.style.width = '100%';
          
            consoleInput10.innerHTML = "Eat";
            consoleInput11.innerHTML = "Use";
            consoleInput12.innerHTML = "Discard";

            backInput1.innerHTML = "Back";
            backInput1.style.width = '100%';

            consoleInput1.style.width = '33.33%';
            consoleInput2.style.width = '33.33%';
            consoleInput3.style.width = '33.33%';
            consoleInput4.style.width = '33.33%';
            consoleInput5.style.width = '33.33%';
            consoleInput6.style.width = '33.33%';
            consoleInput7.style.width = '33.33%';
            consoleInput8.style.width = '33.33%';
            consoleInput9.style.width = '33.33%';
            consoleInput10.style.width = '33.33%';
            consoleInput11.style.width = '33.33%';
            consoleInput12.style.width = '33.33%';

            integerValue = 2;
            setTimeout(() => {
                timeBoolean = true;
              }, "1000")



        }



        boxSelector();
        console.log(selection);
        historyContainer.scrollTop = historyContainer.scrollHeight;

        
    }
}







    
});
    

