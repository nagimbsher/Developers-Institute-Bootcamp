import React from "react";

    export class Color extends React.Component {
   constructor(props){
    super(props);
this.state = {favoriteColor:"red"};
   }
   changeColor = () =>{
    this.setState({ favoriteColor:"blue"})
   };
   render(){
    return <>
    <h1> My favorit color is : {this.state.favoriteColor}</h1>
    <button onClick={this.changeColor}>change Color to blue</button>
    </>
   }
  componentDidMount(){
    setTimeout(() => {
        this.setState({ favoriteColor:"yellow"});
    }, 3000);
   }
    }



//     import React from "react";

//     export class Color extends React.Component {
//    constructor(props){
//     super(props);
//     console.log("constructor");
//    }
//    static getDerivedStateFromProps(){
//     console.log("etDerivedStateFromProps()")
//    }
//    render(){
//    console.log("render");
//    return <>hi</>
//    }
//    componentDidMount(){
//     console.log("componentDidMount()");
//    }
//     }