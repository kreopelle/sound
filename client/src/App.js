import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer.js'
import SoundsContainer from './containers/SoundsContainer.js'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <LoginContainer />
        <SoundsContainer />
      </div>
    );
  }
}

export default App;
