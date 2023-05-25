// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()


// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242


const form = document.querySelector("form");
form.addEventListener("submit",handleSubmit);

function handleSubmit(e){
      e.preventDefault();
    console.log(form.elements);
    const [city1lat,city1long,city2lat,city2long] =[...form.
    elements].map((input) => input.value);

const url1 = getApiUrl(city1lat,city1long);
const url2 =getApiUrl(city2lat, city2long);

const promise1 = fetch(url1).then((res) => res.json());
const promise2 = fetch(url2).then((res) => res.json());

Promise.all([promise1, promise2])
.then((res) =>console.log(res))
.catch((error) => console.error(error));
}
 function getApiUrl(lat,lng){
return `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}api.`;
 }