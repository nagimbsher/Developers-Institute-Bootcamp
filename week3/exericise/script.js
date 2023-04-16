// // Strings method
//var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var a = txt.length;
//
// //
//var str = "Please locate where 'locate' occurs!";
//var pos = str.indexOf("locate");
// //
//console.log(pos);
// //
// // var str = "Please locate where 'locate' occurs!";
// // var pos = str.lastIndexOf("locate");
// // console.log(pos);
// // //
// // var str = "Please locate where 'locate' occurs!";
// // var pos = str.indexOf("locate);
// // //
// var str = "Please locate where 'locate' occurs!";
// var pos = str.search("locate");
// // console.log(pos);
// // // slice(start, end)
// // // substring(start, end)
// // // substr(start, length)
// // //
 var str = "Apple, Banana, Kiwi";
 var res = str.slice(7, 13);
console.log(res);

// var str = "Apple, Banana, Kiwi";
// var res = str.slice(-12, -6);
// // //
// // // var res = str.slice(7);
// // // var res = str.slice(-12);
// // //
// var str = "Apple, Banana, Kiwi";
// var res = str.substring(7, 13);
// var res = str.substring(7);
// console.log();
//
// var str = "Apple, Banana, Kiwi";
// var res = str.substr(7);
// var res = str.substr(-4);
//
// str = "Please visit Microsoft!";
// var n = str.replace("Microsoft", "Developers Institute");
// var n = str.replace("MICROSOFT", "Developers Institute");
// // //
// var text1 = "Hello World!";       // String
// var text2 = text1.toUpperCase();
// var text2 = text1.toLowerCase();
//
// var text1 = "Hello";
// var text2 = "World";
// var text4 = "FAin";
// var text3 = text1.concat(" ", text2, text4);
// console.log("text3",text3);
// //
// var str = "       Hello World!        ";
// str = str.trim();
// console.log(str);
// //
//var str = "HELLO WORLD";
//str.charAt(0);

// //
//var str = "hELLO WORLD";
//str.charCodeAt(0)
//console.log("charCodeAt",str.charCodeAt(0));
// //
//var str = "HELLO WORLD";
//str[0];
// //
// //
// console.log();





// // Strings method
//var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var a = txt.length;
//
// //
//var str = "Please locate where 'locate' occurs!";
//var pos = str.indexOf("locate");
// //
//console.log(pos);
// //
// // var str = "Please locate where 'locate' occurs!";
// // var pos = str.lastIndexOf("locate");
// // console.log(pos);
// // //
// // var str = "Please locate where 'locate' occurs!";
// // var pos = str.indexOf("locate);
// // //
// var str = "Please locate where 'locate' occurs!";
// var pos = str.search("locate");
// // console.log(pos);
// // // slice(start, end)
// // // substring(start, end)
// // // substr(start, length)
// // //
// var str = "Apple, Banana, Kiwi";
// var res = str.slice(7, 13);
// console.log(res);
//
// var str = "Apple, Banana, Kiwi";
// var res = str.slice(-12, -6);
// // //
// // // var res = str.slice(7);
// // // var res = str.slice(-12);
// // //
// var str = "Apple, Banana, Kiwi";
// var res = str.substring(7, 13);
// var res = str.substring(7);
// console.log();
//
// var str = "Apple, Banana, Kiwi";
// var res = str.substr(7);
// var res = str.substr(-4);
//
// str = "Please visit Microsoft!";
// var n = str.replace("Microsoft", "Developers Institute");
// var n = str.replace("MICROSOFT", "Developers Institute");
// // //
// var text1 = "Hello World!";       // String
// var text2 = text1.toUpperCase();
// var text2 = text1.toLowerCase();
//
// var text1 = "Hello";
// var text2 = "World";
// var text4 = "FAin";
// var text3 = text1.concat(" ", text2, text4);
// console.log("text3",text3);
// //
// var str = "       Hello World!        ";
// str = str.trim();
// console.log(str);
// //
//var str = "HELLO WORLD";
//str.charAt(0);
// //
//var str = "hELLO WORLD";
//str.charCodeAt(0)
//console.log("charCodeAt",str.charCodeAt(0));
// //
//var str = "HELLO WORLD";
//str[0];
// //
// //
// console.log();






//Ziv Chen
  //8:13 PM
//numbers_methods.js
 
//Number Methods

//toString()​;
//var x = 123;
//Click to expand inline (56 lines)





//Ziv Chen
  //8:38 PM
//arrays-method.js
 
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
//​
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
//​
  // var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 //  var citrus = fruits.slice(1, 3);
// console.log(citrus);

 //var fruits = ["Banana", "Orange", "Apple", "Mango"];
 //fruits.toString();








