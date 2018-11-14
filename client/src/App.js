import React from 'react';
import LoginContainer from './containers/LoginContainer.js'
import SoundsContainer from './containers/SoundsContainer.js'

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

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
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/sounds">Sounds</NavLink>
    </li>
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
  </ul>
);

export default App;
