import React, { Component } from 'react'
import 'tachyons'
import users from './users.json'
export default class User extends Component {
    render (){
    return (
      <div className='User'>
        {
      users.map( (item,indx) => {
        return(
        <User info={item} key={indx}/>
      )
    })
      }
    </div>
  );
}
  }



