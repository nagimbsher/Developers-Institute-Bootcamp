import React from "react";

export class Phon extends React.Component {
constructor(props){
    super(props);
    this.state = {
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    };
}

changeColor = (e) =>{
this.setState({color: "blue"});
console.log(this.state);
};
render(){
    return <> <h2>This phoe brand is :{this.state.brand}</h2>
    <h3>
        It's a{this.state.color}{this.state.model} from {this.state.year}
    </h3>
<button onClick={this.changeColor}>changeColor</button>
    </>
}
}
