// const { json } = require("express");

// const from = document.querySelector("from")
// from.addEventListener("submit", handleSubmit)

// function handleSubmit(e){
//     e.preventDefault();
//     const formDate = new FormData(from);
//     const body = {};
//     for (const entry of formDate){
//         console.log(entry);
//         const key = entry[0]
//         const vlue =entry[1];
//         body[key] = vlue;

//        // console,log("body that we will send to server",body)
//     }
//     sendSearch(body);
// }
// function sendSearch(body){
// const ur = "http://localhost:3000/search/title";
// fetch(ur,{
//     body:JSON.stringify(body),
//     headers:{
//         "content-Type":"application/json"
//     },
//     method:"POST"
// })
// .then((res) => res.text())
// .then((html) => {
//     document.querySelector("body").innerHTML = html;
// })
// .catch(console.error);
// }