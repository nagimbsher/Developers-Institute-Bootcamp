// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false



let arr = [ true, true, true ]

console.log(!arr.includes(false))

arr = [ true, false, true ]

console.log(!arr.includes(false))

function onlyOne(input1, input2, input3){
    output = false;
    let truthy = 0;
    let falsey = 0;
    if (!!input1) {
        truthy++;
    } else falsey++;
    if  (!!input2) {
        truthy++;
    } else falsey++;
    if (!!input3) {
        truthy++;
    } else falsey++;
    if (falsey > truthy) {
        output = true;
    }
    if (falsey > 2) {
        output = false;
    }
    return output;
    }



