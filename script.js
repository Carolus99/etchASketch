//get used to fake coding with comments 
//declare constants
const resetButton = document.querySelector("#reset");
const container = document.querySelector('.container');
const gridContainer = document.querySelector('.grid-container');

//create grid container
const createGridContainer = () =>{
  const gridContainer = document.createElement("div");
  gridContainer.id="grid-container"
  container.appendChild(gridContainer);
}

//grid template columns is worth looking into as a style
function setGridSize(gridSize){
  for(let i=0; i <gridSize*gridSize;i++){
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize},auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize},auto)`;
    let gridBlock = document.createElement("div");
    gridBlock.setAttribute("class","gridBlock");
    gridContainer.appendChild(gridBlock);
  }
}


//create grid and size properly
//NOTE must be done before running even listener functions
createGridContainer();
setGridSize(16);

//Reset button functionality. Note that class adder is grafted on bottom
resetBtn.addEventListener("click", e =>{
  const gridContainer = document.querySelector("#grid-container");
  gridContainer.remove();
  createGridContainer();
  setGridSize(prompt("Enter grid size (Eg. '16' creates a 16x16 grid)"));
  const gridBlocks = document.querySelectorAll(".gridBlock");

//nesting this inside the reset function makes the class adder work after resetting
gridBlocks.forEach((gridBlock) => {
  gridBlock.addEventListener("mouseenter", function(e) {   
      e.target.setAttribute("class", "hovered")
  });
});
});

//will work once reset button is hit, but this is needed to work on default
const gridBlocks = document.querySelectorAll(".gridBlock");
gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseenter", function(e) {   
        e.target.setAttribute("class", "hovered")
    });
});