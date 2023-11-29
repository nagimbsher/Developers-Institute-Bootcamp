const fs = require("fs/promises");


    
fs.readFile("./hello.tex",  { encoding: "utf8" })
.then ((res) => console.log(res))
.catch(console.error);

fs.writeFile("goodjob.tex", "good job my bro");
fs.appendFile("goodjob.tex", "\ngood night");
fs.unlink("goodjob.tex")

// async function handleFiles(){
// try {
// const res = await fs.readFile("./hello.tex",  { encoding: "utf8" });
// console.log(res);
// await fs.writeFile("goodjob.tex", "good job my bro");
// await fs.appendFile("goodjob.tex", "\ngood night");
// await fs.unlink("goodjob.tex");

// }catch (err){
// console.error(err);
// }

// }
// handleFiles();