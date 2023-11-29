//pormise .all
///pormise .allsetteled
//pormise .race
//pormise .any
//pormise .resolve('resovlve)
//pormise .reject('reject')
 

// const pormise1 = new Promise((res,rej) =>{
//     rej('Resole promose1')
//     setTimeout
// })
// const pormise2 = new Promise((res,rej) =>{
//     res('Resole promose2')
// })
// const pormise3= new Promise((res,rej) =>{
//     res('Resole promose3')
// })
//  let arr  = [ pormise1,pormise2,pormise3];
//  pormise.all(arr)
//  .then(resultm =>{
//     console.log('res',res);
//  })
//  .catach(e => {
//     //console.log('reje'e);
//  })


// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholdertypicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums"
//   ];

//   let arrp = urls.map (url=>{
//     const res = await fetch(url)
//       return await res.json()
//   })
//   console.log(arr);
//   Promise.all(arr)
//   .then(results =>{
//     console.log(results);
//   })
//   .fetch(e=>{
//     console.log(e);
//   })

//async / await

//es8


// function getusers(){
//     fetch('')
//     .then(res => res.json())
//     .then (data => {
//         console.log(data)
//     })
// }


//async in loops
// const timeout = async (milliseconds,id)=>{
//     await new Promise((resolve =>){
//         setTimeout()
//     })
// }