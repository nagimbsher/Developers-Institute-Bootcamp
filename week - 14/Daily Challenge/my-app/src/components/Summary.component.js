import React from 'react'
export class Summary extends React.Component {
    constructor(props){
        super(props)
        console.log('props:',props)
    }
    render(){
       
        return<>
<div id="summary">
<h1>Entered infomation:</h1>
<p>Your name</p>
<p>Your age:</p>
<p>Your gender:</p>
<p>Your destination:</p>
<span> Your dietary restrictions:</span>
<br/>
<span>**Nuts free :</span> <span>No</span>
<br/>
<span>**Lactose free :</span> <span>No</span>
<br/>
<span>**Vegan meal :</span><span>No</span>
        </div>
        </>
        

    }
    }
