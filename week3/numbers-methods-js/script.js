Number Methods
​
toString()
​
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23
​
​
toFixed()
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000
​
toPrecision()
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600
​
​
Number()
parseInt()
parseFloat()

Number()	Returns a number, converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns an integer

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,330");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
 
// Array Methods

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.toString();
// console.log(fruits);
// console.log(fruits.toString());

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// let f = fruits.join(" ");
// console.log(f);
//
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // Removes the last element ("Mango") from fruits
// console.log(fruits.pop());
// console.log(fruits);
// //
// // var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var x = fruits.pop();
// console.log(x);    // the value of x is "Mango"
// console.log(fruits);

//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits);
//  Adds a new element ("Kiwi") to fruits
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var x = fruits.push("Kiwi");   //  the value of x is 5
// console.log(x);
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);
// // Removes the first element "Banana" from fruits
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
// console.log(fruits);
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");    // Returns 5
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits
// console.log(fruits.length);
//
// var myGirls = ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "Linus"];
// var myChildren = myGirls.concat(myBoys);
// console.log(myChildren);  // Concatenates (joins) myGirls and myBoys
//
// var arr1 = ["Cecilie", "Lone"];
// var arr2 = ["Emil", "Tobias", "Linus"];
// var arr3 = ["Robin", "Morgan"];
// let arr4 = arr1.concat(arr2, arr3);
// console.log(arr4);  // Concatenates arr1 with arr2 and arr3
//
// var arr1 = ["Cecilie", "Lone"];
// var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);
//
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1);
// console.log(citrus);
//
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(3);
// console.log(citrus);
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 3);
// console.log(citrus);
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.toString();