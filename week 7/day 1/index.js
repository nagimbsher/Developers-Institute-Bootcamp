//JavaScript Instructor18:14
/* Exercise
* Create an function that get an array of Numbers as input
* and return a new array with all numbers multiply by 2
* For example:
* Give this array [1,2,3,4]
* result [2,4,6,8]
*/
function map(array){
    let newArr = [];
    array.forEach((item,i) => {
        newArr.push(item *2)
    });
    return  newArr
}

// * Create an function that get an array of Numbers as input
// * and return a new array with all numbers multiply by 2
// * For example:
// * Give this array [1,2,3,4]
// * result [2,4,6,8]
// */

let arr = [1,2,3,4];
let arr2 = arr.map(item => {
    if(item % 2 ===0){
        return item *2
    }
})
console.log(arr);
console.log(arr2);


// creat a function that get an arry of numbers as input
//and erturn a new array with all numbers great than 3 
//for exmple :
//give this array [0,1,1,2,3,5,8]
//result [5,8]

function filter (arr){
 let newArr = [];
 arr.forEach((item,i) => {
    if (item > 3){
        newArr.push(item)
    }
 })
 return newArr
console.log(filter);
}

//Exercise 
//create an function that get an arry of numbers as input
// and return  the sum of all unmbers
// for example 
//Give this arry [2,5,10,100]
// result 117

let number = [2,5,10,100]
const total = number.reduce((accumulator,item) => {
    return accumulator + item 
},100)
console.log(total);


function reduce(arr){
    let sum = 0;
    arr. forEach((item,i) => {
        sum +=item
    });
    return sum
    console.log(reduce([2,5,10,100]));
}





// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


function sumOfDigits(num) {
 let arr = new String (num).split('');
 let nswNumber = arr . reduce((total,item) =>{
    return total + Number(item);
 }) 
 //6
 if(nswNumber <10){
    return nswNumber
 }
 
 return ( nswNumber < 10)? nswNumber : sumOfDigits(nswNumber);
}


// Birthday Cake Candles
// This array are Birthday Cake Candles
// You can blow only the tallest candles
// let arr = [2,4,8,4,8,1,8]
// birthdayCakeCandles function will return
// how many candles you can blow

function birthdayCakeCandles(arr) {
    let maxNum = Math 
    return arr.filter (item => {
        return item === maxNum
    }).length
}


/*
* findIntersection function return an array that
* contain the numbers exist in both strings from the array.
* ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
*/
function findIntersection (arr){
    let arr1 = arr[0].split(',') //[1,2,5,6,7]
    let arr2 = arr[1].split(',')//[2,5,7,8,15]
    let ret = arr1.filter(value =>{
        return arr2.includes(value)
    })
return ret
}














