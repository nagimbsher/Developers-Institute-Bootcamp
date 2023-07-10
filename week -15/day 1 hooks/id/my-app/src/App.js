import { createContext, useState, useRef } from "react";
import "./App.css";
import Counter from "./components/Counter";
import MathCalculate from "./components/MathCalculate";

export const AppContext = createContext();

const App = (props) => {
  const nameInput = useRef()
  const [count, setCount] = useState(0);

  const name = useRef()

  const handleClick = () => {
    name.current = nameInput.current.value;
  }
  return (
    // <AppContext.Provider value={{count, setCount}}>
    //   <div className="App">
    //     <Counter />
    //     <input type="text" ref={nameInput} />
    //     <button onClick={handleClick}>Click input</button>
    //   </div>
    // </AppContext.Provider>
    <MathCalculate/>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
