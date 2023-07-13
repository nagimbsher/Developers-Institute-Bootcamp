
import React from 'react';
import Lesson from './Lesson';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: "javascript"
    };
  }

  render() {
    return (
      <div>
        <Lesson subject={this.state.subject} />
      </div>
    )
  }
}

export default App;



// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//    hello 
//       </header>
//     </div>
//   );
// }

// export default App;
