import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary.component";
import "bootstrap/dist/css/bootstrap.min.css"


export class App extends React.Component{
    handleClick =async() =>{
      const url = "https://webhook.site/1142be32-e5c4-4a02-bb79-2a0ebe9903c7";
      try{
        //const res = await fetch(url);
        const body = {key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27}
      const options = {
        method:"POST",
        Headers:{
          "content-Type":"applications/json"
        },
        body:JSON.stringify(body)
        };
        const res = await fetch(url,options);
        const resJson= await res.json();
        console.log("resJson:",resJson)
      } catch(err){
        console.error(err);
      };
    }
    render(){
    return (
      <ErrorBoundary>
        <button onClick={this.handleClick}> Post Data</button>
      </ErrorBoundary>
    
    );
  };
} ; 


   export default(App)
   