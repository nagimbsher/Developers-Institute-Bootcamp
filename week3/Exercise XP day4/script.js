//Exercise 1: Simple If/Else Statement
//Instructions
//Create 2 variables, x and y. Each of them should have a different numeric value.
//Write an if/else statement that checks which number is bigger.
//Example :

//let x = 5;
//let y = 2;

//You should display:
//x is the biggest number

const x = 25
const y = 10
if(x < y){
    console.log("x is bigger")
}else {
    console.log("y is bigger")
}


//Create a variable called newDog where it’s value is “Chihuahua”.
const newDog = "chihuahua"
//Check and display how many letters are in newDog.
console.log("number of laters in newDgog:", newDog.length)
//Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase())
console.log( newDog.toLowerCase())
//Check if the variable newDog is equal to “Chihuahua”
//if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
//else, console.log ‘I dont care, I prefer cats’
if(newDog==="chihuahua"){  
    console.log("I,love Chihuahuas,it's my favorite dog breed")
}else{
    console.log("I dont care,I prefer cats")
}


//🌟 Exercise 3: Even Or Odd
//Instructions


//Prompt the user for a number and save it to a variable.
const userNumber =prompt("enter a number")
//Check whether the variable is even or odd.(userNumber  %2 ===0){
  if(userNumber% 2===0){
    console.log(userNumber + "is an even number")
  }else{
    console.log(userNumber +"is an odd number")
  }
//If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.











 

//Exercise (4)

//Instructions
//Below is an array of users that are online in a group chat.
const users =["lea123", "Princess45","cat&doglover","heloo@000",]

//const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
//Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
//If there is no users (the users array is empty), console.log “no one is online”.
if (users.length===0) console.log("no one is online")



//If there is 1 user, console.log “<name_user> is online”.

if(users.length===1)console.log(user[0]+"is online")


//If there are 2 users, console.l og “<name_user1> and <name_user2> are online”.

if(users.length===2)console.log(users[0]+"and"+users[1]+"are online")

//If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.

if (users. length > 2 ) console.log('${users[0]}, ${users[1]} and ${users.lenth-2 } moer are online')
//For example, if there are 5 users, it should display:
//name_user1, name_user2 and 3 more are online
