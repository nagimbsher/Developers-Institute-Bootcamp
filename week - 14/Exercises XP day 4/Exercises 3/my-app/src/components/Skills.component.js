import React from "react";
import posts from "./../data/data.json";
export class SkillComponent extends React.Component {
    constructor(props){
        super(props);
    }
  render(){
      return posts.skills.map((skill) => {
        const aree = skill.Area
       const skillsSet = skill.skillsSet;
       return(
          <>
       <p>{aree}</p>
       {skillsSet.map((set)=>(
        <li>{set.Name}</li>
       ))}
       </>
       );
     });
  }
 }
 