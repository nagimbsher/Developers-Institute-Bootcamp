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
                <label htmlFor="gender1">Mele</label>
                <input
                type="text"
                name="lastname"
                value={this.props.info.lastName}
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
                    {destination.map((dest) =>(
                    <option value={dest}>{dest}</option>
                    ))}
                    
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
}