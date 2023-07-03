import React, { createContext, useContext} from 'react'
import App, { AppContext } from '../App'
 import SubCounter from "./components/SubCounter.component"
const Counter = (props) =>{
  const{count} = useContext(AppContext);
  return(
    <>
    <h3>{count}</h3>
    <SubCounter/>
    </>
  )
}
export default Counter