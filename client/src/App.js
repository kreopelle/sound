import React from 'react';
import LoginContainer from './containers/LoginContainer.js'
import SoundsContainer from './containers/SoundsContainer.js'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/sounds">Sounds</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </ul>
);

export default App;
