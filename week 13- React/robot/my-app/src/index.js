import User from './components/User'
import './App.css';
import users from './users.json'
import 'tachyons'

function App() {

  return (
    <div className="App">
    {
      users.map( (item,indx) => {
        return (
          <User info={item} key={indx}/>
        )
      })
    }
    </div>
  );
}

export default App;







// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Hello from './User';
// import reportWebVitals from './reportWebVitals';
// import 'tachyons';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Hello/>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
