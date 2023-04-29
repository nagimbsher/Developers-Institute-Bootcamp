//*Exercise reverse 
//* everse each word in a given string 
//*For exaple :
//Giveen this 'word in a given String'
//*result'drow in a nevig gnirts'




function reverseWord(str){
    let ret = "";
    for(let i = str.length - 1; i >= 0; i--){
      ret = ret + str[i]
    }
    return ret
  }
  function reverseAll(sentence){
    let arr = sentence.split(' ');
    // console.log(arr);
    for(index in arr){
      const word = arr[index];
      // console.log(word);
      // const reverse = reverseWord(word);
      let ret = "";
      for(let i = word.length - 1; i >= 0; i--){
        ret = ret + word[i]
      }
      // console.log(reverse);
      arr[index] = ret
    }
    return arr.join(' ');
  }
  
//   const ret = reverseAll('word in a given String')
//   console.log(ret);
  
