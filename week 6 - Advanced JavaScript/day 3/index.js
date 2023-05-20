// let myCar = {}
// myCar.brand ='Ford'
// myCzr.model = 'Mustang'
// myCar.year='1969'
// function my  (obj){
//     let myster = "cart";
//     for (i in obj){
//         mastr + `+${i}is ${obj[i]} `;
//     }
//     console.log(myster);
    
// }




let name = 'John';
let email = 'nagim@gmail.com'
let username = 'nagim'
let obj = {
    name,
    email,
    username,
}


//By value or By Reference
let user ={
    name : 'Mark',
    address:{
        cty:'Tel Avivi',
        country:'Israel'
    }
}
// create a new user by clone user obj and change the valuse
let user2 ={...user};
user . name = 'Eli';
user2.address.city ='Haifa'
console.log(user);
console.log(user2);












