const figuresBlack = document.querySelectorAll('.figureBlack');
const figuresWhite = document.querySelectorAll('.figureWhite');

const cellsB = document.querySelectorAll('.cellBlack');
const cellsW = document.querySelectorAll('.cellWhite');

for (figureW of figuresWhite) {
  figureW.addEventListener('dragstart', dragstart);
  figureW.addEventListener('dragend', dragend);
}

for (figureB of figuresBlack) {
  figureB.addEventListener('dragstart', dragstart);
  figureB.addEventListener('dragend', dragend);
}

for (const cellB of cellsB) {
  cellB.addEventListener('dragover', dragover);
  cellB.addEventListener('dragenter', dragenter);
  cellB.addEventListener('dragleave', dragleave);
  cellB.addEventListener('drop', dragdrop);
}

for (const cellW of cellsW) {
  cellW.addEventListener('dragover', dragover);
  cellW.addEventListener('dragenter', dragenter);
  cellW.addEventListener('dragleave', dragleave);
  cellW.addEventListener('drop', dragdrop);
}

function dragstart(event) {


  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
  event.target.classList.remove('hold', 'figureBlack');
  event.target.classList.add('cellWhite');
  event.toElement.classList.add('cellWhite');
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add('hovered');
}

function dragleave(event) {
  event.target.classList.remove('hovered');
}

// function dragdrop(event) {
//   event.target.classList.remove('hold', 'figureWhite' && 'figureBlack');
//   event.target.classList.remove('cellBlack');
//   event.target.classList.remove('hovered');
//   console.log(event)
//   event.target.classList.add('figureBlack');1
//   event.target.append(figuresBlack);
//   event.target.append(figuresWhite);
// }

function dragdrop(event) {
  event.target.classList.remove('hold', 'hovered');
  console.log(event);
  
    event.target.classList.remove('figureWhite');
    event.target.classList.add('figureBlack');
    event.target.classList.add('cellWhite');
    event.toElement.classList.add('cellWhite');
}
