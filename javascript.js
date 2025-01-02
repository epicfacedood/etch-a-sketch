
var gridSize = "10";
var chosenColor = 'black';
var colorOn = false;

//EVERYTHING ABOVE IS ALL THE RANDOM VARIABLES



const container = document.querySelector(".container")



//Configuring the buttons to get user input for grid size
const sizeSelectorButton = document.querySelector("#size")
sizeSelectorButton.addEventListener("click", () =>{
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
    gridSize = prompt("What's the size you want gang? Only 1-100")
    alert(gridSize)
    createGrid(gridSize)
})

//Setting the reset button
const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", () => {
    alert("Your drawing will now be reset")
    const nodeList = document.querySelectorAll(".gridSquare")
    for (const bruh of nodeList){
        bruh.style.backgroundColor = 'beige'
    }
   
})

//Setting the Color Button
const colorButton = document.querySelector("#color")
colorButton.addEventListener("click", () => {
    if (colorOn == false){
        colorOn = true;
        alert("You are now painting with a rainbow brush")
    }
    else {
        colorOn = false;
        alert("You are using the black brush")
    }
})

function createGrid(size){
    for (let i = 1; i < Number(size)+1; i++){
        const gridRow = document.createElement("div")
        gridRow.classList.add("gridRow")
        for (let i = 1; i < Number(size)+1; i++){
            const gridSquare = document.createElement("div")
            gridSquare.classList.add("gridSquare")
            gridSquare.textContent= ""
            gridRow.appendChild(gridSquare)
            gridSquare.addEventListener('mouseover', () => {
                if (colorOn){
                    gridSquare.style.backgroundColor = generateRandomColor()
                }
                else {
                    gridSquare.style.backgroundColor = chosenColor;
                }
              });
        }
        
        container.appendChild(gridRow);
    }    
}

function generateRandomColor () {
    list = ['blue','green','pink','black','yellow','purple','orange']
    return list[getRandomInt()]
}

function getRandomInt() {
    return Math.floor(Math.random() * 6);
  }