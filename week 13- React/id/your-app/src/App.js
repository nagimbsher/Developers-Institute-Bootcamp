
import React from "react";
export class App extends React.Component {
   constructor(props){
    super(props);
    this.state = {
        languages : [
            {name: "Php", votes: 0},
            {name: "Python", votes: 0},
            {name: "JavaSript", votes: 0},
            {name: "Java", votes: 0}
        ]
    };
   }
   incrementCount = (languageName) => {
     const languageToUpdate = this.state.languages.find((lang)=> lang.name
     === languageName);
     const newCount = { 
    name: languageToUpdate.name,
    votes:languageToUpdate.votes++ 
     };
       this.setState(newCount);
     };
   render(){
    return(
        <>
        <h1> Vote for your favorite languages!</h1>
        {this.state.languages.map((lang) => (
        <p>{lang.name} : {lang.votes}
        </p>
        ))}
        </>
    );
   }
}








export default App;
