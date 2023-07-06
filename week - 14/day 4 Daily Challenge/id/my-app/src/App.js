import React, { Component } from 'react'
import "./App.css";
import heroes from "./data/heroes.json";
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {heroes:heroes.superheroes};
  }
  render() {
    return (
      <div className='container'>
        <nav className='navbar'>
<h1>Superheroes React Memory Game</h1>
<div> Score:0</div>
<div>TOP Scour:0</div>
        </nav>
        <div className='rules'>
          Get points by clicking on an image but do not click the same one twice
        </div>
        <div className='heroes-container'> 
        {this.state.heroes.map((hero) =>{
          return<div className='hero-card'>{hero.name}</div>
        })}
        </div>
      </div>
    );
  }
}
