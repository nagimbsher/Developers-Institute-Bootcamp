import React, { Component } from 'react'
import { ErrorBoundary } from './components/ErrorBoundary.component'
import {BrowserRouter } from "react-router-dom";
import{ Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { PostList} from "./components/PostList.component";


const routes = (
  <Routes> 
    <Route path="/"element={<HomeScreen />}></Route>
    <Route path="/shop"element={<ShopScreen />}></Route>
    <Route path="/profile"element={<profileScreen />}></Route>
  </Routes>
);

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
      <BrowserRouter >
      <Navbar/>
      <ErrorBoundary>{routes}</ErrorBoundary>
     </BrowserRouter >
     </ErrorBoundary>
    );
  }
}

function Navbar() {
  return( <> 
    <h1>Welcome to React Router!</h1>
    <p>
  <NavLink to="/">Home</NavLink>
  </p>
  <p>
  <NavLink to="/profile">Profile</NavLink>
  </p>
  <p>
  <NavLink to ="/shop">Shop </NavLink>
  </p>
  </>
  );
}

function HomeScreen (){
  return<h1> Home </h1>;
}
 function ShopScreen (){
  return<h1> Shop</h1>;
 }

 function profileScreen(){
  
  return <h1> Profile</h1>;
 }