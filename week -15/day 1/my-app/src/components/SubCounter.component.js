import { useContext } from "react";
import { AppContext } from "../App";

const SubCounter = (props) => {
const {count,setCount} = useContext(AppContext);
return(
    <>
    <h2> SubCounter</h2>
    <h3>{count}</h3>
    </>
)
}

export default SubCounter