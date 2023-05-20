





const yellowBox = document.getElementById("target");
const redBox = document.getElementById("box");

function dragStart(){
  console.log("dragStart:");
}

  function allowDrop(event){
    event.preventDefault();
    console.log("event:",event);
    yellowBox.classList.add("is-hovered");

  }

  function handelDrop(event){
 console.log("handleDrop:");
 yellowBox.classList.remove("is-hovered");
 yellowBox.append("box");
  }
 