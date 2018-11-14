import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer.js'
import SoundsContainer from './containers/SoundsContainer.js'
import NavContainer from './containers/NavBarContainer.js'

class App extends Component {

  render() {
    return (
        <NavContainer />
        <LoginContainer />
        <SoundsContainer />
      </div>
    );
  }
}

export default App;
