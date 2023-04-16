// Instructions
// Prompt the user for several words (separated by commas).
const answer =prompt ("Type a few words separated by commas");
// Put the words into an array.
const words = answer.split(",")
// Console.log the words one per line, in a rectangular frame as seen below.
//function log(words){
//console.log(word);
//}
//words. forEach(log)



 let lengthOflogestword = 0;
for( const word of words){
    console.log(word);
   const wordLength = word.length;//3
    if (wordLength> lengthOflogestword){
 lengthOflogestword = wordLength;
    }
    console.log("lengthOflongestWord", lengthOflogestword);
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
 