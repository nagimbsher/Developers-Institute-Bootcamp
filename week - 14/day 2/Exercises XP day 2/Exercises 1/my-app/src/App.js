
// import React, { Component } from 'react'
// import  Hero from './components/Hero'
// import ErrorBoundary from './components/ErrorBoundary'
// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <ErrorBoundary>
//         <Hero heroName="Batman"/>
//         </ErrorBoundary>
//         <Hero heroName="Superman"/>
//         <ErrorBoundary>
//         <Hero heroName="Joker"/>
//         </ErrorBoundary>
//       </div>
//     )
//   }
// }
// export default  App

import React, { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <span>current state: {this.state.counter}</span>
        <br />
        <button onClick={this.handleClick}>click me!</button>
      </div>
    );
  }
}

export default BuggyCounter;



