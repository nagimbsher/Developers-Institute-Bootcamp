const fs = require("fs");

const characters = fs.readFileSync("Rightleft.txt", "utf-8").split("")

let position = 0;
for(const chararcter of characters) {
    if (chararcter  !="<" && chararcter != ">"){
        console.log(
            "this character is wrong.Let's skip  it"
        );
        continue;
    }
       const difference = chararcter ==="<"?-1:1;
       position += difference;
}
let LeftOrRight = sayLeftOrRight(position);

function sayLeftOrRight (position){
    if (position ===0) return"";
    return position > 0 ? " to the right":"to the left"
}
console.log(`${Math.abs (position)} steps ${LeftOrRight}`);







// let position = 0;
// for(const chararcter of characters) {
//     if (chararcter === "<"){
// position = position -1;
//     }else if  (chararcter === ">"){
// position = position + 1;
//     }else{
//         //console.log("This is a wrong character");
//     }