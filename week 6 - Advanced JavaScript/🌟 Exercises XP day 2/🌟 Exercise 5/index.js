

 const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
 const ordinal = ["th","st","nd","rd"];

// Using these arrays :
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
colors. forEach ((color,index) => {
    const incrementtedInde = index + 1;
    console.log(`${incrementtedInde}${getOrdianl(incrementtedInde)} choice is ${color}`);

});

function getOrdianl(index){

    if (index === 1 || index === 2 || index === 3)return ordinal [index];
    return ordinal[0];
}
// function getOrdianl (index){
//     if ([1,2,3].includes (index))return ordinal[index];
//     return ordinal[0];
// }

// function getOrdianl(index){
//     return [1,2,3].includes(index)? ordinal[index]:ordinal[0];
// }






