const form = document.getElementById("my-form");
const radius = document.getElementById("radius");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    const r = Number(radius.value);
    if (Number.isNaN(r))return;
    console.log("r:" ,r);
}







