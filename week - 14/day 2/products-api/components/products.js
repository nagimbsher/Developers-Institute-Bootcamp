import {useState} from 'react'
import './App.css';
import products from './components/Child'

const products = (props) =>  {
  const [text, setText] = useState('text')

  return (
    <div className="shop">
      <header className="App-header">
        {text}

        <products a={setText}/>
      </header>
    </div>
  );
}

