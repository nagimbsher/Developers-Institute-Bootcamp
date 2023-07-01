import React, { Component } from 'react'
import { ErrorBoundary } from './components/ErrorBoundary.component'
import {BrowserRouter } from "react-router-dom";
import{ Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { PostList} from "./components/PostList.component";
import { SkillComponent, SocialMedia } from './components/Skills.component';
import { Experiences } from "./components/Experiences.component";
import { SocialMedia } from "./components/SocialMedia.component";


const routes = (
  <Routes> 
    <Route path="/"element={<SocialMedia/>}></Route>
    <Route path="/experiences"element={<Experiences/>}></Route>
    <Route path="/skill"element={<SkillComponent/>}></Route>
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
  <NavLink to="/SocialMedia">SocialMedia</NavLink>
  </p>
  <p>
  <NavLink to="/skill">Skills</NavLink>
  </p>
  <p>
  <NavLink to ="/experiences">Experiences</NavLink>
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