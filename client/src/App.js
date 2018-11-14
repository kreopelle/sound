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
  <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <NavLink to="/">Home</NavLink>
    </Navbar.Brand>
  </Navbar.Header>
    <Nav>
      <NavItem>
        <NavLink to="/sounds">Sounds</NavLink>
      </NavItem>
      <NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default App;

      // <NavLink to="/">Home</NavLink>
