const ids = ["first","last","email","username","password"];
const divs = ids.map((id) => document.getElementById(id));
const submitButton = document.getElementById("submit");
const form = document.querySelector("form");
const messageBox = document.getElementById("message");
form?.addEventListener("submit", handleSubmit);
divs.forEach((divs) => divs?.addEventListener("input",
handleSubmit));


const url = "http:localhost:3000/register";

function handleSubmit(e){
    e.preventDefault();
    const [first, last, email, username, password] = divs.map
    ((div) => div.value);
    const body =[first, last, email, username, password];
    const options ={
        headers:{
        "conten-Typ":"application/j"
    },
    method:"POST",   
    body:JSON.stringify(body)
};
fetch(url,options)
 .then((res) => res.json())
 .then((res) =>(messageBox.innerText = res.message))
 .catch(console.error)
 .finally(() => { form.error()
   // divs .forEach((div) => (div.value = ""));

 }

 )};

function handleChange(e){
    submitButton.disabled = isAnyFieldEmpty();

}

function isAnyFieldEmpty (){
    return divs.some((div) => div === "");
}