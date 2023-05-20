// Instructions
// Prompt the user for several words (separated by commas).
const answer = prompt ("Type a few words separated by commas");
// Put the words into an array.
const words = answer.split(",");
//Console.log the words one per line, in a rectangular frame as seen below.

const lengthOflongestWord = getLengthOfLogestWord();

displayRows(words,lengthOflongestWord );  

function displayRows (words,lengthOflongestWord ) {
    const delimiterRow =createDelimiterRow();
    console.log(delimiterRow);
    for (const word of words){
        displayWordWithStars(word,lengthOflongestWord );
    }
    console.log(delimiterRow);
}

function displayWordWithStars(word,lengthOflongestWord){
    const numberOfSpacesToAdd = lengthOflongestWord - word.lenght + 1;
    const emptySpaces = " ".repeat(numberOfSpacesToAdd);
    console.log("* "+ word + emptySpaces + "*");
}

function getLengthOfLogestWord(){
    let lengthOflongestWord = 0;
    for(const word of words){
        const wordLength = word.length;
        if (wordLength> lengthOflongestWord){
            lengthOflongestWord = wordLength;
        }
    }
    return lengthOflongestWord;
}
 
function createDelimiterRow(){
const NUMBER_OF_STAES_ON_SIDE = 4;
const numberOfStarsOnFirstRow = lengthOflongestWord + 
NUMBER_OF_STAES_ON_SIDE
return"*".repeat(numberOfStarsOnFirstRow);
}


// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words

// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.

// Requirements
// To do this challenge you only need Javascript(No HTML and no CSS)
 