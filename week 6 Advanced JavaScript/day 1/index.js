//Examples foroperato 1


// let operator = '+';
// const calc = ( a,b)=>{
//   if(operator === '+'){
//   return a+ b ;
//   }
//   else if (operator==='-'){
//     return a + b;
//   }
//   else if (operator==='*'){
// return a + b;
//   }
//   else if (operator===`/`){
// return a / b;
//   }
// }a

  //Examples foroperato 3
//   const getFull = a => {
//     return a+2
//   }
//   let ret = getFull (10)
// console.log(ret);



//Examples foroperato
let arr = [2,4,6,8,10,];
const includes = ( item)=>{
  for ( x in arr ){
    if (arr[x]=== item){
    return true;
  }
}
return false;
}



//Examples foroperato 2

// let x = 'yes';
//  function getX(){
//     return x = x
// }
// console.log(getX());

//  function getEmail(name){
//   return name +'@gmail.com'
//  }
//  console.log(getEmail('jone'));
  


  //const numbers = [10,11,12,15,20];
  // write a function that return 4 digit of credit card number
// pad with * at the begining
// 458023457768890
// ***********8890
// let str = '050'
// let ret = str.padStart(3,'0')
// console.log(ret);




 //Examples foroperato 4

 let str = '050'
 let ret = str.padStart(3,'0')
 console.log(ret);



//Examples 1

//const padStart = (number) => {
  //  let last4digit = number.slice(-4);
   // return last4digit.padStart(number.length, '*')
    // let start = '';
    // for (let i = 0; i < number.length-4; i++) {
    //   start += '*';
    // }
    // return start + last4digit;


//Examples 2

  //   const padStart = (number) => {
  //     let last4digit = number.slice(-4);
  //     return last4digit.padStart(number.length, '*')
  // }
  // console.log(padStart('458023457768890'));



//Examples str


  //for the space
  //let str= '    hello';
 // console.log(str.trim());
