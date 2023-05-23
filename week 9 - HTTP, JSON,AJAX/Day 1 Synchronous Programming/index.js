
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



// let x;
// fetch ('https://zivuch.github.io/yogaapi.json')
//  .then(rest=> {
//     return rest. json();
//  })
// .then(data => {
//     x = data
//     console.log(data);
// })
// .catch(e=> {
//     console.log(e);
// })
// console.log(x);





let x;
fetch('https://zivuch.github.io/yogaapi.json')
.then(res => {
    return res.json();
})
.then(data =>{
    getx(data) 
})
.catch(e=>{
console.log(e);
})
console.log(x); 
function getx (x){
    console.log(x)
}






// JavaScript Instructor18:38
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
//   return res.json();
// })
// .then((data)=>{
//   render(data);
//   // arr = data
// })
// .catch((err)=>{
//   console.log(err);
// })
// const root = document.getElementById('root')
// function render(arr) {
//   console.log('render',arr);
//   arr.forEach(item=>{
//     const div = document.createElement('div');
//     const p = document.createElement('p');
//     p.innerText = item.email
//     div.appendChild(p)
//     root.appendChild(div)
//   })

// }
// const root = document.getElementById('root')
// function render(arr) {
   // const html = arr.map(item => {
   // return `<div style='display:inline-block;border:1px solid #000;'>
    //  <img src='https://robohash.org/${item.id}?size=150x150' />
      <h2>${item.name}</h2>
      <p>${item.email}</p>
    </div>`
  })
  root.innerHTML = html.join('')
}





JavaScript Instructor18:38
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
  return res.json();
})
.then((data)=>{
  render(data);
  // arr = data
})
.catch((err)=>{
  console.log(err);
})
const root = document.getElementById('root')
function render(arr) {
  console.log('render',arr);
  arr.forEach(item=>{
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = item.email
    div.appendChild(p)
    root.appendChild(div)
  })
}
const root = document.getElementById('root')
function render(arr) {
    const html = arr.map(item => {
    return `<div style='display:inline-block;border:1px solid #000;'>
      <img src='https://robohash.org/${item.id}?size=150x150' />
      <h2>${item.name}</h2>
      <p>${item.email}</p>
    </div>`
  })
  root.innerHTML = html.join('')
}


















