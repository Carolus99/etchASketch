const container = document.querySelector('.container');

const grid = document.querySelector('.grid');

function createGrid(number) {
    number = number * number
    for (let i = 0; i < number; i++) {
      let div = document.createElement('div');
      div.classList.add('square');
      div.style.width = `${Math.sqrt(((500*500)/number))}px`;
      div.style.height =`${Math.sqrt(((500*500)/number))}px`;
      container.appendChild(div);
    }
  }

createGrid(16);
