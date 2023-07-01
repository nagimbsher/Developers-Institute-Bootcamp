import React from "react";

export class UserForm extends React.Component {
  constructor(props){
    super(props);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const messageInput = document.getElementById("search")
    const message= messageInput.value
    const options = {
        method: "POST",
        Headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({message})
    };
    const url = "http://localhost:3001/api/world";
    try{
    const resJson = await fetch (url, options);
    const res = await resJson.json();
    this.props.setMessage(res.message);
  }catch(err){
    console.error(err);
  }
  };
  render =()=>{
  return(<form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Something her" id="search"/>
    <input type="submit" value= "Submit" />
  </form>

   );
  }
}