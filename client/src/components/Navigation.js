import React from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Search from './Search'

// render navigation bar

const Navigation = () => (
  <Navbar fluid collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <NavLink to="/">Listen</NavLink>
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
    </Nav>
    <Nav pullRight>
      <Search />
    </Nav>
  </Navbar.Collapse>
  </Navbar>
);

export default Navigation
