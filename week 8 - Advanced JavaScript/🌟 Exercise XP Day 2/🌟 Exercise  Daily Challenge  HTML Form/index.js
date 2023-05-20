document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(document.querySelector("form"));
    //console.log(e,target);
    //for(const entry of entries){
      //  console.log(entry);
  //  }
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  const dataString = JSON.stringify(data);
  const p = document.createElement("p");
  p.innerText = dataString;
  document.body.appendChild(p);

}