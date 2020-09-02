import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react'

const NavBar = (props) => {
  return (
    <Container>
      <Menu className="navbar">

        <NavLink to="/">Home </NavLink>
        <NavLink to="/todo">Todo </NavLink>
        <NavLink to="/login">Login </NavLink>
      
      </Menu>
    </Container>
  );
};

export default NavBar;