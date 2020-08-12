const container = document.querySelector('.container');
const gridContainer = document.querySelector('.grid-container');

const createGridContainer = () =>{
  const gridContainer = document.createElement("div");
  gridContainer.id="grid-container"
  container.appendChild(gridContainer);
}

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





createGridContainer();
setGridSize(16);

const gridBlocks = document.querySelectorAll(".gridBlock");
gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseenter", function(e) {   
        e.target.setAttribute("class", "hovered")
    });
});