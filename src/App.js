import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Todo from './Components/Todo'
import Login from './Components/Login'
import 'semantic-ui-css/semantic.min.css'
import {Menu, Segment } from 'semantic-ui-react'

const App = (props) => {
  return (
    <div >
      <NavBar menu={Menu}/>
      <Route exact path="/" component={Home} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/login" component={Login} />
    </div>
  )
  
}


export default App;
