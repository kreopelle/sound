import React from 'react';
import LoginContainer from './containers/LoginContainer.js'
import SoundsContainer from './containers/SoundsContainer.js'
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/sounds" component={SoundsContainer} />
      <Route path="/login" component={LoginContainer} />
    </div>
  </Router>
)

const Home = () => <h2>Home</h2>

const Header = () => (
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/sounds">
          <NavItem>Sounds</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem>Login</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default App;

      // <NavLink to="/">Home</NavLink>
