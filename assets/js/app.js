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
}

const names = [];

/**
 * Function that handles the button add name
 * @param {*} event 
 */
function clickButtonHandler(event){
    event.preventDefault();
    console.log(event);
    let addedName = document.getElementById("nameInput").value;
    names.push(addedName);
    console.log(names);
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
    console.log(event);
    let lastOutput = names.pop();
    console.log(lastOutput);
    console.log(names);
    deleteFromDom(lastOutput);
}

function deleteFromDom(lastOutput){
    const div = document.getElementById("playerList");
    div.removeChild(div.lastElementChild);
}
