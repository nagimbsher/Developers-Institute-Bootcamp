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
   render(){
    return(
        <>
        <h1> Vote for your favorite languages!</h1>
        </>
    );
   }
}