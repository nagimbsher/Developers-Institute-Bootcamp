

 const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
 const ordinal = ["th","st","nd","rd"];

// Using these arrays :
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
colors. forEach ((color,index) => {
    console.log(`${index +1}${getOrdianl(index)} choice is ${color}`);

});

function getOrdianl(index){
    console.log ("we are looking for the ordinal for this index:",index);
   // if (index === 0 || index === 1 || index === 2)return ordinal [index];
}