import React from "react";
export class UserForm extends React.Component{
    constructor(props) {
        console.log("props:",props);
        super(props);
    }
    render(){
        return<>
        <form method="post" action="/" id="form">
            <input type ="text" name= "firstname" placeholder="First name" />
            <input type ="text" name= "lastname" placeholder="Last name" />
             <input type ="text" name= "age" placeholder="age" />

             <label htmlFor="gender">Mele</label>
           <input type="radio" name="male" value="male" id="gender1"/>
           <label htmlFor="gender">Famale</label>
           <input type="radio" name="famale" value="Famale" id="gender2"/>

           <label htmlFor="destination">Destination:</label>
           <select name="destination" id="destination">
            <option value="thailand">Thailand</option>
            <option value="japan">Japan</option>
            <option value="brazil">Brazil</option>
           </select>
           <p> Dietary restrictions</p>
           <label htmlFor="id1">Nuts free</label>
           <input type="checkbox" name="nonuts" id="diet1"></input>
            <label htmlFor="id2">Lactose free</label>
            <input type="checkbox" name="nolactose" id=" diet2"/>
            <label htmlFor="id3">Vegan</label>
            <input type="checkbox" name="vegan" id="diet3"/>
            
            <input type="submit" value="Submit"></input>
        </form>
        </>
    }
}