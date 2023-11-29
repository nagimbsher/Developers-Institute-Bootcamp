import React from "react";

const clickMe =() => alert("I was click");
const  handleKeyPress=(e) => {
if (e.key != "Enter") return;
const message = "The enter key was pressed, your input is:" + e.target.value;
alert(message);
};

export class Events extends React.Component{
    ToggleButton = () => {
    this.setState({isToggledOn: !this.state.isToggledOn});
    };
    constructor(props) {
        super(props);
        this.state = { isToggledOn: true};
    } 
    render(){
        const buttonMessage = this.state.isToggledOn? "ON": "OFF";
        return(
        <>
        <p> Hello from Events components</p>
        <button onClick={clickMe}>Click</button>
        <input id="myinput" type="text" onKeyDown={handleKeyPress}/>
        <button onClick ={this.ToggleButton}>{ buttonMessage}</button>
        </>
        );
    }
}