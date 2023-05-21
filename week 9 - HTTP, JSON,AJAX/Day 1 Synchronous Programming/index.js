
/*write a function testNum that takes a number
as an input and
returns a Promise that tests if the value
is less than 10
value < 10 - resolve with value
'number is less than 10, success!!!'
reject with value
'number is greater or equal to 10, error!!!'
call the function and get results
// */

// const testNum = (num) => {
//     return new Promise((res,rej)=>{
//       if(num < 10){
//         res(num +' is less than 10, success!!!')
//       }
//       else{
//         rej(num + ' is greater or equal to 10, error!!!')
//       }
//     })
//   }
//   testNum(15)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(e => {
//     console.log(e);
//   })




  

//   const getX=()=>{
//     return new Promise((resolve,reject)=>
//         setTimeout(()=>{
//             resolve (2)
//         }, 2000)
    
//     )
// }

// const getY=()=>{
//     return 3
// }
// const getXY = () =>{
//     let X = getX()
//     X.then(rest=>{
//     let y = getY()
//     console.log(rest + y);
//     })
    
// }
// getXY();




let x;
fetch ('https://zivuch.github.io/yogaapi.json')
 .then(rest=> {
    return rest. json();
 })
.then(data => {
    x = data
    console.log(data);
})
.catch(e=> {
    console.log(e);
})
console.log(x);

















