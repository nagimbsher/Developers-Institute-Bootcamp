

let distance = 0
let interval

function myMove(){
interval = setInterval(moveRedSquare,1)
}

function moveRedSquare(){
if (distance === 350){
    clearInterval(interval)
    return
}
distance = distance + 1
const redSquar = document.getElementById ("animate")
redSquar.style.left = distance + "px"
}
 
