import React from "react";
import "./Exercise4.component.css";
export function Exercise4() {
const styleHeader = {
    color:"white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};
return(
<>
<h1 style={styleHeader}>Exercise 4 </h1>
<p classsName="para">Paragraph</p>
<a href="#"> A link</a>
<form>
<input></input>
</form>
<img src="https://via.placeholder.com/150" />
<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
</>
   ); 
}