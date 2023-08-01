let wordPlayer1 = prompt('Write a word minimum 8 letters'); 
let wordArr = wordPlayer1.split("");
let wordLength = wordPlayer1.length;
let guessArr  = Array(wordLength).fill("*")

console.log(guessArr)

if (wordLength < 8) {
  wordPlayer1 = prompt("Nagim , your word is less then 8 letters, try again");
}

console.log(`The word is ${guessArr.join('')}`)

while (guessArr.includes('*')) {
  let letterPlayer2 = prompt("Try to guess a word, type one letter");

  if (letterPlayer2.length > 1) {
    letterPlayer2 = prompt("Nagim, just one letter at once");
  }

  let correctGuess = false;

  for (let i = 0; i < wordArr.length; i++) {
    if (letterPlayer2 == wordArr[i]) {
      guessArr[i] = letterPlayer2;
      correctGuess = true;
    }
  }

  console.log(guessArr.join(""))

  if (!correctGuess) {
    console.log('Incorrect guess')
  }
}

console.log('You won!')