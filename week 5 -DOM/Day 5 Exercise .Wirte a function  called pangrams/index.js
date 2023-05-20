
/*Wirte a function  called pangrams that will take one string s as input.
apangram is a sentence that cantains every Letter of the aLpanbet 
That goal of this function is to  determine given is a pangram or not 
If it is not apangram , will return pangram. Here i an example:"The
quick brown fox jumps over the Lazy dog"
"We promtly judged antique ivory buckLes for the priz" x is missing
*/


let alphabet =  "abcdefghijklmnopqrstuvwxyz";
//toLowerCase()
function pangrams (s){
    let lowereCase = s. tolowereCase().split('').join('');
    for(let i = 0 ; i < alphabet.length; i++){
        if(lowereCase.indexOf (alphabet[1]) ===-1){

        }
    }
}
