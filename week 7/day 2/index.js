// JavaScript Instructor18:16
// Write a function called 'solution' that given a string S
// consisting on N letters 'a' and /or 'b'
// returns true where all occurrences of letter 'a'
// before all occurrences of letter 'b',
// and returns false otherwise
// Write an efficient algorithm within for the following assumptions:
// N is an integer within the range [1...300000]
// string S is made only of the characters 'a' and/or 'b'
// note that 'b' does not need to occur is S should return true
// note that 'a' does not need to occur is S should return tru

// console.log(solution('aabbaa'));
// console.log(solution('aabab'));
// console.log(solution('bbbbbaaaa'));
// console.log(solution('abba'));
// console.log(solution('aabb'));
// console.log(solution('a'));
// console.log(solution('b'));

// function testSolution() {
//     const testCases = [
//       { input: 'aabbb', output: true },
//       { input: 'ba', output: false },
//       { input: 'aaa', output: true },
//       { input: 'b', output: true },
//       { input: 'abba', output: false },
//       { input: 'a', output: true },
//       { input: 'bbaa', output: false },
//       { input: 'bbba', output: false },
//       { input: 'aabb', output: true },
//       { input: 'bababab', output: false },
//       { input: 'babababa', output: false },
//       { input: 'aabababb', output: false },
//       { input: 'baaab', output: false },
//       { input: 'bbabbabbababbab', output: false },
//       { input: 'babaabaaab', output: false },
//       { input: 'ab', output: true },
//     ];
//   for (let i = 0; i < testCases.length; i++) {
//       const { input, output } = testCases[i];
//       const result = solution(input);
//       console.log(`Input: "${input}", Output: ${result}, Expected Output: ${output}`);
//     }
//   }
  
//    testSolution();


//function solution (a,s)
function solution(S) {
    let len = S. lentgth;
    let foundA = -1;
    let foundB = -1;
    for(let i = 0; i < len; i++){
      if(S[i]==='a'){
        foundA = i;
      }
      else if (S[i]==='b'){
        foundB = i;
      }
      if (foundB < foundA && foundB !== -1 && foundB !== -1){
        return false
      }
    }
    return true

}
//}
// function solution(S){

// }

// Advanced Object 
//Object keys


//fuction distatuing

// const users = {
//     user1: { age: 44, name: 'picard', },
//     user2: { age: 12, name: 'sisko', },
//     user3: { age: 109, name: 'janeway',},
//   }
  // filter for all users older than 30
  // and store their data in an array
  // use Array.filter Array.map
//   [
//     {id:'user1',age:44, name: 'picard'},
//     {id:'user3',age:109, name: 'janeway'}
//   ]
 
//   const usersKeys = Object.keys(users);
//   console.log(usersKeys);
//   const adults = usersKeys
//     .filter(key => users[key].age > 30)
//     .map(id => ({id, ...users[id]}))
//   console.log(adults);

//class vs object
//class called animal 
//method

















