// Using this array :
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//for ( let i = 0; i < colors .length; i ++){
    //const color = colors[i];
    //contantenation
   // console.log("#"+Number(i+1)+"chice is "+color);
    //Template literal 
    //console.log (`#${i+1}choice is ${color}`);
//}
//   colors.forEach(sayColor);
// function sayColor(color, i){
//     console.log(`#${i+1}choice is ${color}`);
// }

// for (const color of colors){
//     console.log(color);
// }

colors.forEach((color,i) => console.log(`#${i-1}choic is ${color}`));


// const violet = colors.find ((clore) => color === "violet");
// const isVioletInArray = violet != undefined;
// console.log("isVioletInArray:",isVioletInArray);

let isVioletInArray = false;
colors.forEach((color) =>{
    if(color ==="violet")isVioletInArray=true;
})
console.log("isVioletInArray:", isVioletInArray);

//onst colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.
