import React, { Component } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const routes = (
  <Routes>
    <Route path="/" element={<HomeScreen />}></Route>
    <Route path="/shop" element={<ShopScreen />}></Route>
    <Route path="/profile" element={<ProfileScreen />}></Route>
  </Routes>
);
export default class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <Navbar />
          {routes}
        </BrowserRouter>

    );
  }
}
function Navbar() {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
      <p>
        <NavLink to="/profile">Profile</NavLink>
      </p>
      <p>
        <NavLink to="/shop">Shop </NavLink>
      </p>
    </>
  );
}

function HomeScreen() {
  return (
    <>
      <h1>HomeScreen</h1>
    </>
  );
}

function ShopScreen() {
  return (
    <>
      <h1>ShopScreen</h1>
    </>
  );
}

function ProfileScreen() {
  return (
    <>
      <h1>profileScreen</h1>
    </>
  );
}



//import React from 'react'
// import { ErrorBoundary } from './components/ErrorBoundary.component'
// import{ Routes, Route, NavLink , BrowserRouter} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"

// const routes = (
//   <Routes> 
//     <Route path="/" element={<HomeScreen />}></Route>
//     <Route path="/shop" element={<ShopScreen />}></Route>
//     <Route path="/profile" element={<profileScreen />}></Route>
//   </Routes>
// );

// export default class App extends React.Component {
//   render() {
//     return (
//       <ErrorBoundary>
//       <BrowserRouter >
//       <Navbar/>
//       {routes}
//      </BrowserRouter >
//      </ErrorBoundary>
//     );
//   }
// }

// function Navbar() {
//   return(
//      <> 
//     <h1>Welcome to React Router!</h1>
//     <p>
//   <NavLink to="/">Home</NavLink>
//   </p>
//   <p>
//   <NavLink to="/profile">Profile</NavLink>
//   </p>
//   <p>
//   <NavLink to ="/shop">Shop </NavLink>
//   </p>
//   </>
//   );
// }

// function HomeScreen (){
//   return<h1> Home </h1>;
// }
//  function ShopScreen (){
//   return<h1> Shop</h1>;
//  }

//  function profileScreen(){
  
//   return <h1> Profile</h1>;
//  }


 