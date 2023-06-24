

function playTheGame(){
  
const isUserReady = confirm ("D you want to play?")
if(!isUserReady) alert("No proplem,Goodbye")
     
const computerNumber = generateRandomNumber()

const answer = prompt("Enter a number")
let numberOfTries = 0
 

while(Number(answer)!= computerNumber){
numberOfTries = numberOfTries + 1
if (numberOfTries ===3) return alert ("sorry too many tries. The number was" + computerNumber)
if (!isOnlyNumbers(answer))return alert ("sorry it's not a good number Goodbye")
if(!isBetweenZeroAndTen(Number(answer))) return alert ("sorry it's not a good number Goodbye")

let biggerOrSmaller = (Number (answer)> computerNumber) ? "bigger":"smaller"
alert ("your number is "+ biggerOrSmaller + "than computer's, guess again")
answer = prompt("Enter another number")
}

const finalMessage = 'WINNER    the number was indeed ${computerNumber}. you found in ${numberOfTries + 1} tries.' 
alert(finalMessage)
}



function isOnlyNumbers(str) {
   const regex = new RegExp(/^[0-9]*$?/)
   return regex.test(str)
}

function isBetweenZeroAndTen(number){
  return number >= 0 && number <= 10
}
 function generateRandomNumber(){
  if( userNumber === computer){
    alert ("WINNER")
   return 
  }
  if(userNumber > computerNumber) {
    alert("your number is bigger then the computer's guess again")
  }
}
 

// First Part
// Create a JS file and link it to the index.html file.

// Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called.
// We will learn more about events next week ;)


// Now let’s create the function:

// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.

