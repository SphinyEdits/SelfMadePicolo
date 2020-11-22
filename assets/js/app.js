//wait until window is loaded
window.addEventListener("load", init);

/**
 * Function to initialize the website
 * @param {*} event 
 */
function init(event){
    console.log("in init");
    const addButton = document.getElementById("nameInputButton");
    addButton.addEventListener("click", clickButtonHandler);
    const deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", deleteButtonHandler);
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startButtonHandler);
    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", nextButtonHandler);
}

const names = [];
let randomChosenName;
let spareNameForNextRound = [];



const virusArray = [
    " doe jumping jacks tot het weer jouw beurt is.",
    " mag niet meer praten, tot iedereen een slok heeft gedronken.",
    " ga bij iemand op schoot zitten tot je een challange hebt volbracht.",
    " is vanaf nu de barman (jij zorgt voor de drankjes). Als iemand 1 min zonder drankje zit moet je zelf een atje doen. Je bent barman tot je een imiteer opdracht raad.",
    " eindig iedere zin met het woord simp anders moet je 1 slok drinken.",
    " praat met een accent naar keuze van de medespelers.",
    " vanavond drink jij met de tegenovergestelde hand anders 2 slokken.",
    " hou jij het vol om 1 uur lang niet te lachen? ja, deel een atje uit. Nee, neem zelf 3 slokken.",
    " iedere keer als je linker buurman een slok neemt neem jij hetzelfde aantal slokken doe dit 4 beurten."
];

const challangeArray =  [
    "ruik iedereen zijn oksels en rank iedereen.",
    "laat iemand een tatoeage op je onderarm tekenen.",
    "kies een deelnemer uit en doe een seks positie.",
    "rank iedereen op uiterlijk.",
    "maak 3 grappen.",
    "kies een drinking buddy. (kan niet geweigerd worden).",
    "Immiteer een kreun geluid.",
    `Doe steen papier schaar voor een atje (best of 3) tegen de persoon links van je.`
];

const imitationsArray = [
    "imiteer een clown.",
    "imiteer een meme.",
    "imiteer een dino.",
    "kies een medespeler en imiteer deze.",
    "imiteer een dier naar keuze.",
    "imiteer een bekend persoon naar keuze."
];

const chooseOptionsArray = [
    "Paddo of XTC",
    "Iemand van hetzelfde geslacht zoenen of seks met 1 van je leraren",
    "Oud en nieuw vieren of een festival",
    "Brain or beauty",
    "Heb je liever een broer of een zus",
    "One night stand met iemand uit de groep of de groep 20 jaar niet meer zien"
];

/**
 * Function that handles the button add name
 * @param {*} event 
 */
function clickButtonHandler(event){
    event.preventDefault();
    //console.log(event);
    let addedName = document.getElementById("nameInput").value;
    names.push(addedName);
    //console.log(names);
    writePlayerToDom(addedName);
}

/**
 * Writes variable addedName to DOM
 * @param {*} addedName 
 */
function writePlayerToDom(addedName){
    const div = document.getElementById("playerList");
    const li = document.createElement("li");
    li.textContent = addedName;
    div.appendChild(li);
}

/**
 * Function that delets the last input
 */
function deleteButtonHandler(event){
    event.preventDefault();
    //console.log(event);
    let lastOutput = names.pop();
    //console.log(lastOutput);
    console.log(names);
    deleteFromDom(lastOutput);
}

/**
 * Function that deletes the last added name
 * @param {*} lastOutput 
 */
function deleteFromDom(lastOutput){
    const div = document.getElementById("playerList");
    div.removeChild(div.lastElementChild);
}

/**
 * StartButton handler Function
 * @param {*} event 
 */
function startButtonHandler(event){
    event.preventDefault();
    //console.log(event);
    chooseRandomName();
}

/**
 * nextButton Handler Function
 * @param {*} event 
 */
function nextButtonHandler(event){
    event.preventDefault();
    //console.log(event);
    chooseRandomName();
    ChooseRandomCategory();
}

/**
 * Function that chooses a random name of the names array
 */
function chooseRandomName(){
    randomChosenName = names[Math.floor(Math.random()*names.length)];
    console.log(randomChosenName);
    //console.log(spareNameForNextRound);
    blocksRepitition(randomChosenName);
}

/**
 * Function that deletes- and writes a random generated name back
 * @param {*} randomChosenName 
 */
function blocksRepitition(){
    if(randomChosenName === spareNameForNextRound[0]){
        console.log(`This ${randomChosenName} can't be twice in a row`);
        chooseRandomName();
    }     
    spareNameForNextRound.push(randomChosenName);
    //console.log(names);
    if (spareNameForNextRound.length === 2){
        spareNameForNextRound.shift();
    }
}

//const Categories = [virusArray, challangeArray, imitationsArray, chooseOptionsArray];
const Categories = [challangeArray, chooseOptionsArray];
let categoryIndex;
/**
 * Function to choose random array + random index of array
 */
function ChooseRandomCategory() {
    let selectedArray = Categories[Math.floor(Math.random()* Categories.length)];
    //console.log(selectedArray);
    categoryIndex = selectedArray[Math.floor(Math.random()* selectedArray.length)];
    //console.log(categoryIndex);
    writeGameToDom(selectedArray);
}

function writeGameToDom(selectedArray){
    document.getElementById("gameDiv").innerHTML = " ";
    const p = document.createElement("p");
    const currentDiv = document.getElementById("gameDiv");
    if (selectedArray === chooseOptionsArray){
        p.textContent = `${categoryIndex}`;
    } else {
        p.textContent = `${randomChosenName} ${categoryIndex}`;
    }
    currentDiv.appendChild(p);
}