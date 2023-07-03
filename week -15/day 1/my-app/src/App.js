import {createContext, useState} from "react"
import Counter from "./components/Counter.component"
export const AppContext = createContext("nul");

const App = (props) =>{
  const [count, setCount] = useState(0)
  return(
    <AppContext.Provider value={{count,setCount}}>
    <div className="App">
      <header className="App-header">

        </header> 
    </div>
    </AppContext.Provider>
  );
}

    
export default App;
