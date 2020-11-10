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

const virusArray = [
    " doe jumping jacks tot het weer jouw beurt is.",
    " mag niet meer praten, tot iedereen een slok heeft gedronken.",
    " ga bij iemand op schoot zitten tot je een challange hebt volbracht.",
    " is vanaf nu de barman (jij zorgt voor de drankjes). Als iemand 1 min zonder drankje zit moet je zelf een atje doen. Je bent barman tot je een imiteer opdracht raad.",
    " eindig iedere zin met het woord simp anders moet je 1 slok drinken.",
    " praat met een accent naar keuze van de medespelers.",
    " vanavond drink jij met de tegenovergestelde hand anders 2 slokken.",
    " hou jij het vol om 1 uur lang niet te lachen? ja, deel een atje uit. Nee, neem zelf 3 slokken.",
    " iedere keer als je linker buurman een slok neemt neem jij hetzelfde aantal slokken doe dit 4x"
];

const challangeArray =  [];
const imitationsArray = [];
const chooseOptionsArray = [];

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
    writeGameToDom();
}

/**
 * Function that chooses a random name of the names array
 */
let randomChosenName;
let spareNameForNextRound = [];
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

function writeGameToDom(){
    document.getElementById("gameDiv").innerHTML = " ";
    const p = document.createElement("p");
    const currentDiv = document.getElementById("gameDiv");
    p.textContent("hoi");
    currentDiv.appendChild(p);
}