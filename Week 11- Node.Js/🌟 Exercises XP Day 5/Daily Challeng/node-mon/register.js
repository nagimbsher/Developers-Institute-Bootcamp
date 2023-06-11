const ids = ["first","last","email","username","password"];
const divs = ids.map((id) => document.getElementById(id));
const submitButton = document.getElementById("submit");
const form = document.querySelector("form");
const messageBox = document.getElementById("message");
form?.addEventListener("submit", handleSubmit);
divs.forEach((divs) => divs?.addEventListener("input",
handleSubmit));


const url = "http:localhost:3000/register";
