
import React, { Component } from 'react';
const User = (props) => {
  const {name, email, username, id} = props.info
   return (
     <div className="tc bg-light-green br3 pa3 ma2 dib bw2 grow shadow-5">
       <img src={`https://robohash.org/${id}?size=150x150`}/>
       <h4>{name}</h4>
       <h4>{email}</h4>
       <p>{username}</p>
       <User/>
     </div>
   )
 }
 export default User



// import React, { Component } from 'react'

// export default class Hello extends Component {
//   render() {
//     return (
//         <div className='fi tc'>
//       <div>Hello</div>
//       <p>Welcome to my app </p>
//       </div>
//     );
//   }
// }
