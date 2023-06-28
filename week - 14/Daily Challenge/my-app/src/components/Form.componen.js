import React from "react";
export class UserForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return<>
        <form>
            <input type ="text" name= "firstname" placeholder="First name" />
            <input type ="text" name= "lastname" placeholder="Last name" />
             <input type ="text" name= "age" placeholder="age" />
             
           <input type="radio" name="male" value="male" id="gender1"/>
           <input type="radio" name="famale" value="Famale" id="gender2"/>

           <label htmlFor="destination">Destination:</label>
           <select name="destination" id="destination">
            <option value="thailand">Thailand</option>
            <option value="japan">Japan</option>
            <option value="brazil">Brazil</option>
           </select>
           <p> Dietary restrictions</p>
           <label htmlFor="id1">Nuts free</label>
           <input type="chekbox" name="nonuts" id="diet1"></input> 
            <label htmlFor="id2"></label>
            <input type="chekox" name="nolactose" id=" diet2">
            </input>
            <label htmlFor="id3"></label>
            <input type="chekbox" name="vegan" id="diet3"/>
        </form>
        </>
    }
}