// containers
let orangeSquare = document.getElementById('drop-container');
let pinkSqareContainer = document.getElementsByClassName('draggable-container')[0];

// draggable element
let pinkSqare = document.getElementById('draggable-element');

pinkSqare.addEventListener('dragstart', function(event){
  event.dataTransfer.setData('pink-square', event.target.id);

  console.log();

  event.dataTransfer.effectAllowed = 'move';
  event.target.style.cursor = 'move';
})

pinkSqare.addEventListener('drag', function(event){
  event.preventDefault();
  // console.log(event.target);
  event.target.classList.add('hide')
})

orangeSquare.addEventListener('dragover', function(event){
  event.preventDefault();
})

orangeSquare.addEventListener('drop', function(event) {
  event.preventDefault();
  let id = event.dataTransfer.getData('pink-square');
  console.log(id);
  let pink = document.getElementById(id)
  event.target.appendChild(pink)
})

pinkSqareContainer.addEventListener('dragover', function(event){
  event.preventDefault();
})

pinkSqareContainer.addEventListener('drop', function(event) {
  event.preventDefault();
  let id = event.dataTransfer.getData('pink-square');
  console.log(id);
  let pink = document.getElementById(id)
  event.target.appendChild(pink)
})














