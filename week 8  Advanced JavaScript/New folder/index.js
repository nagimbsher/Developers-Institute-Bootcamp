
const form = document.querySelector("form");
const input = document.getElementById ("search");
const container = document.getElementById("container");
const deleteAllButton = document.getElementById
("delete-all");
form.addEventListener("submit", handleSubmit);
deleteAllButton.addEventListener("click", deleteAll);

function deleteAll(){
    container.innerHTML= "";
}
//..api 
let api
var apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74"

function requestApi(city){
    //..addded {&units=metric} to the api to round up the number to the nearest 
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    fectchWeatherData()
}

function fectchWeatherData(){
    infoText.innerText="Getting weather info..."
    infoText.classList.add("pending")
    //...get server and return api response
    fetch(api).then(response => response.json()).
    then(result => weatherDetails(result)) 
}


function logRequest(e){
    const response = JSON.parse(e.target.response);
    const firstResult = response.data[0];
    const imageUrl = firstResult.images.fixed_width.webp;
    const altText = firstResult.title;
    createImage(imageUrl, altText);
}

function createImage(url,alt){
    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", removeParentDiv);
    div.prepend(button);
    div.prepend(img);
    container.prepend(div);
}
function removeParentDiv(e){
    const parentDiv = e.target.parentElement;
    parentDiv.remove();
}