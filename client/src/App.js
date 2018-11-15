import React from 'react';
import LoginContainer from './containers/LoginContainer.js'
import SoundsContainer from './containers/SoundsContainer.js'
import CreateSoundContainer from './containers/CreateSoundContainer.js'
import Navigation from './components/Navigation.js'
import Home from './components/Home.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// start react-router, render navigation bar and other components by route 

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route path="/sounds/new" component={CreateSoundContainer} />
      <Route exact path="/sounds" component={SoundsContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)
export default App;
