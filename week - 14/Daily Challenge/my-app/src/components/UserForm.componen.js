import React from "react";
export class UserForm extends React.Component{
    constructor(props) {
        super(props);
    }
    handleSubmit = (e) =>{
    e.preventDefault();
    const entries = Object.entries(this.props.info);
    const params =  entries.jon("8").replace(/,/g/"=")
    const url = "http://localhost/?"+params;
    fetch(url);
    };
    render(){
        const destination = ["Japan","Thailand","Brazil","Israel","UK","Spain"];
        return(
            <>
            <form id="onSubmit={this.handleSubmit}">
                <input
                type="text"
                name="firstname"
                value={this.props.info.firstName}
               onChange={(e) => this.props.ChangeLastName(e.target.value)} 
               />
                <input
                type="text"
                name="age"
                placeholder="Age"
                value={this.props.info.age}
               onChange={(e) => this.props.changeAge(e.target.value)}
                />
                <input
                type="radio"
                name="male"
                value="male"
                id="gender1"
                checked={this.props.info.gender === "male"}
                onChange={(e) => this.props.ChangeGender(e.target.value)}
                />
                <label htmlFor="gender1">Mele</label>
                <input
                type="text"
                name="lastname"
                value={this.props.info.lastName}
                onChange={(e) => this.props.ChangeLastName(e.target.value)} 
                />
                <label htmlFor="gender2">Famale</label>
                <input
                type="radio"
                name="female"
                value="female"
                id="gender2"
                checked={this.props.info.gender==="female"}
                onChange={(e) => this.props.ChangeGender(e.target.value)}
                />
                <label htmlFor="">Destination</label>
                <select 
                name="destination"
                id="destination"
                onChange={(e) => this.props.ChangeDestination(e.target.value)}
                value={this.props.destination}
                >
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                </select>
                <p> Dietary restrictions</p>
                <input
                checked={this.props.info.noNuts}
                type="checkbox"
                name="nonuts"
                id="diet1"
                onChange={(e) => this.props.changeNonuts(e.target.checked)}
                ></input>-

            </form>
            </>

        );
    }
    render(){
        return<>
        <form method="post" action="/" id="form">
            <input type ="text" name= "firstname" value={this.props.info.firstName} />
            <input type ="text" name= "lastname" value={this.props.info.lastName} />
             <input type ="text" name= "age" placeholder="Age" value={this.props.info.age} />

             <label htmlFor="gender">Mele</label>
           <input type="radio" name="male" value="male" id="gender1" defaultChecked/>
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