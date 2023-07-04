const from = document.querySelector("from")
from.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    const formDate = new FormData(from);
    const body = {};
    for (const entry of formDate){
        console.log(entry);
        const key = entry[0]
        const vlue =entry[1];
        body[key] = vlue;

        console,log("body that we will send to server",body)
    }
}