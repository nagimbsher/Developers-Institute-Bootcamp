import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary.component";
import "bootstrap/dist/css/bootstrap.min.css"
export class App extends React.Component {

    handleClick =async() =>{
      const url = "https://webhook.site/1142be32-e5c4-4a02-bb79-2a0ebe9903c7";
      try{
      const res = await fetch(url);
      const options = {
        method:"POST",
        Headers:{
          "content-Type":"applications/json"
        },
        body:JSON.stringify(body)
        };
        const res = await fetch(url, options);
        const res = await res.json();
        console.log("res:",res)
      } catch(err){
        console.error(err);
      };
    render(){
    return (
      <ErrorBoundary>
        <button onClick={this.handleClick}> Post Data</button>
      </ErrorBoundary>
    );
  }
}  
}

   export default(App)
   