const fs = require("fs");
const characters = fs.readFileSync("Rightleft.txt",
 "utf-8").split("");

const AUTHORIZED_CHAREACTERS = ["<" ," >"];
let position = 0;
let stepOfFirstMinusOne = null;

characters. forEach((character, step) =>{
    if (!AUTHORIZED_CHAREACTERS. includes(character))return  
    console.log ("this character is wrong, let's skip it");
    incrementPosition(character);
    checkStepOfFirstMinusOne(step);
    });

    let LeftOrRight = sayLeftOrRight(position);
   const finalSentence =`${Math.abs (position)} .steps. $
    {LeftOrRight}`;
    console.log(finalSentence);

    function sayLeftOrRight (position){
        if (position ===0) return"";
        return position > 0 ? " to the right":"to the left";
    }
    

    function incrementPosition(character) {
    const difference = character === "<" ? -1: 1;
    position += difference;
    }
    
function checkStepOfFirstMinusOne(step){
       if (position === -1 && stepOfFirstMinusOne === null){
        stepOfFirstMinusOne = step;
        console.log("we hit -1 ! Current step is:",
        stepOfFirstMinusOne);
       }
    }







