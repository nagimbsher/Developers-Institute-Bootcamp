// // Instructions
// // Convert the below promise into async await:

// // fetch("https://www.swapi.tech/api/starships/9/")
// //     .then(response => response.json())
// //     .then(objectStarWars => console.log(objectStarWars.result));
// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
 
getStarshData();
async function getStarshData(){
    const response = await fetch("https://www.swapi.tech/api/starships/9/")
    const result = await response.json();
    console.log("result:",result);
}

