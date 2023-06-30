import React from 'react';
import UserData from './UserData';

class App extends React.Component {
  constructor() {
    super();
  }

  handleSubmit = event => {
    event.preventDefault();
    let inputs = event.target.getElementsByTagName('input')
    for (const item of inputs) {
      console.log(item.value)
    }
  }

  render() {
    return (
      <div className="box" >
        <UserData handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;





// import React from "react"

// export class PostList extends React.Component {
//     constructor(props){
//   super(props)
//   console.log('props:',props)
//     }
//     render(){
//         return<div>Posts</div>;
//     }
// }
