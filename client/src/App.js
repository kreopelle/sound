import React from 'react';
import LoginContainer from './containers/LoginContainer.js'
import SoundsContainer from './containers/SoundsContainer.js'
import CreateSoundContainer from './containers/CreateSoundContainer.js'
import Navigation from './components/navbar/Navigation.js'
import Home from './components/navbar/Home.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/sounds" component={SoundsContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route exact path="/sounds/new" component={CreateSoundContainer} />
    </div>
  </Router>
)
export default App;
