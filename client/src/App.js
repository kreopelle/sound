import React from 'react';
import LoginContainer from './containers/LoginContainer.js'
import SoundsContainer from './containers/SoundsContainer.js'
import CreateSoundContainer from './containers/CreateSoundContainer.js'
import Navigation from './components/Navigation.js'
import Home from './components/Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route path="/sounds/new" component={CreateSoundContainer} />
        <Route path="/sounds" component={SoundsContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
)
export default App;
