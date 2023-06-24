import React from "react";
import "./Language.component.css";

export class Language extends React.Component{
    constructor(props){
        console.log("props:", props);
    super(props);
    }
    handleClick = () => {
        console.log("click");
        this.props.incrementCount();
    };

    render(){
    return(
            <>
             <div className="language">
            <span>{this.props.votes} </span>
           <span>{this.props.name}</span>
           <button onClick={this.handleClick}>Clik Here </button>
           </div>
            </>
        );
         }
    }
  







