import React from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

// render navigation bar

const Navigation = () => (
  <Navbar fluid collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <NavLink to="/">Home</NavLink>
    </Navbar.Brand>
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem>
        <NavLink to="/sounds">Sounds</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/sounds/new">New Sound</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/login">Login</NavLink>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
);

export default Navigation

// <NavItem>
//   <NavLink to="/logout">Logout</NavLink>
// </NavItem>
