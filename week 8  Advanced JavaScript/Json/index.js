// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };
  
//   let jsonStudent = JSON.stringify(student);
  
//   alert(typeof jsonStudent); // string
  
//   alert(jsonStudent);
//   /* JSON-encoded object:
//   {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
//   */

// Pretty Print JSON String
// If you skip the optional parameters when calling JSON.stringify(), the output JSON string will not include any spaces or line breaks. This makes it hard to read the serialized JSON string, especially when you write it in a file.

// To improve the readability, we can pass in a number as the 3rd argument representing the total white spaces. The white space count must be between 0 and 10.

// For instance:

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };
  
//   let jsonStudent = JSON.stringify(student, null, 2);
  /* 
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": [
      "html",
      "css",
      "js"
    ],
    "wife": null
  }
  */

  //Nested JavaScript Object In JSON
  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["John", "Ann"]
    }
  };
  
  alert(JSON.stringify(meetup,null,2));
  
  /* The whole structure is stringified:
  
  {
    "title": "Conference",
    "room": {
      "number": 23,
      "participants": [
        "John",
        "Ann"
      ]
    }
  }
  
  */


  // JSON.Parse
  // To decode a JSON-string, we need another method named JSON.parse.
  // The syntax:
   // let value = JSON.parse(str, [reviver]);
   //the value.
//For instance:

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert(numbers); //[0, 1, 2, 3]
alert(numbers[1]); // 1


//for nested objects:

//    let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

// alert(user);
// // { name: 'John', age: 35, isAdmin: false, friends: [ 0, 1, 2, 3 ] }

// alert(user.friends[1] ); // 1


// Summary
// JSON is a data format that has its independent standard and libraries for most programming languages.
// JSON supports plain objects, arrays, strings, numbers, booleans, and null.
// JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
// Both methods support transformer functions for smart reading/writing.
// If an object has toJSON, then it is called by JSON.stringify.

