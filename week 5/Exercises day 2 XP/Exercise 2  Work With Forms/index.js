const form = document.querySelector("form");

function logFormInputs(e){
    e.preventDefault();
const firstName = document. querySelector("[name=fname]").value;
const lasttName = document. querySelector("[name=lname]").value
    if(firstName===""|| lasttName ===""){
        alert("please fill in all fields");

        
        const ul = document .creareElement("ul")
        ul. innerText="This is our <ul>"
        form.append(ul);
    }
}

form.addEventListener("submit",logFormInputs);
