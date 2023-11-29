import React from "react";
import posts from "./../data/data.json";
export class Experiences extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const experiences = posts.Experiences.map((xp) => {
        return(
            <>
        <p>{xp.companyName}</p>;
        <img srs = {xp.logo} width="100" height="100" />
        {xp.role.map((role) =>(
            <>
            <p>{role.title}</p>
            <span>{ role.stateDate}</span>,<span> { role.stateDate}</span>
            <p> {role.description}</p>
            </>
        ))}
       </>
         );
        });
        return experiences;
    }
}
