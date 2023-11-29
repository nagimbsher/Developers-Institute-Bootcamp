import React, { Component } from 'react'
import { UserForm } from './components/UserForm.componen'
import { Summary } from './components/Summary.component'
import "./App.css";
export default class Form extends Component {
  constructor(props){
  super(props);
  this.state={
    firstName:"Nagim",
    lastName:"Basher",
    age:"30"
  };
  }
  render() {
    return (
      <div>
        
        <UserForm info={this.state}/>
        <Summary/>
      </div>
    )
  }
}
