   


let addressNumber ="28";
let addressStreet ="weizmann";
let conutry ="Israel";
let globalAddress="I livein" + addressStreet+addressNumber+"street"+"in"
+ conutry;
console.log(globalAddress)
//console.long("I live in"+addressStreet+addressNumber+"steet," +"in+country");

    //This my first Javascript code
    console.log("hello world");
   // var x =3;
  // var star = "Please locate where 'locate' occurs";
 // string ="dog brwon fox";




//const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
//Remove Banana from the array.
//Sort the array in alphabetical order.
//Add “Kiwi” to the end of the array.
//Remove “Apples” from the array. Don’t use the same method as in part 1.
//Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
//At the end you should see this outcome:
//["Kiwi", "Oranges", "Blueberries"]

const fruits = ["Banana","Apples","Oranges","Blueberries"]
 //Sort the array in alphabetical order.
fruits.shift()
fruits.sort()
//Add “Kiwi” to the end of the array.
fruits.push("Kiwi")
//Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.splice(0,1)
//Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
//At the end you should see this outcome:
fruits.reverse()
console.log('fruits:',fruits)







//exercise2
//Using this array :

//const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
//Access and then console.log “Oranges”.
//Bonus: If you would like more array exercises take a look at the link below.
//Array Exercises
//const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];