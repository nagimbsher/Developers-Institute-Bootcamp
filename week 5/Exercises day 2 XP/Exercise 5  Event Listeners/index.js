const form = document.querySelector("#MyForm");
const radiusInput = form.querySelector("#radius");
const volumeInput = form.querySelector("#volume");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const radius = Number(radiusInput.value);
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  volumeInput.value = volume.toFixed(2); 
});
//EVENT LISTENERS
document.addEventListener("DOMContentLoaded",sayContentLoadad);
function sayContentLoadad(){
    console.log("the THML page was parsed and loaded");
}

document.addEventListener("keyup",(event) => console.log(event.
    keycode));
form?.addEventListener("pointerenter",()=> console.log("pointer inside form"));
form?.addEventListener("pointerleave",() =>  console.log("pointer left form"));

window.addEventListener("blur",()=> {
    const body = document.querySelector("body");
    body.style.background = "yellow";
});

window.addEventListener("fous",()=> {
    const body = document.querySelector("body");
    body.style.background = "white";
});