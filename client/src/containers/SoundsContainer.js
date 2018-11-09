// business logic for displaying sounds
import React, { Component } from 'react'
import CreateSound from '../components/sounds/CreateSound.js'
import { connect } from 'react-redux'

class SoundsContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     sounds: '',
  //   }
  //   // gives access to 'this' to change state with getSounds()
  //   this.getSounds = this.getSounds.bind(this)
  // }

  // getSounds() {
  //   fetch('/api/sounds', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  //     },
  //   })
  //   .then(resp => resp.json())
  //   .then(sounds => this.setState({
  //     // would like to push each record as indiv objects to a sounds array
  //     sounds: JSON.stringify(sounds)
  //   }
  //   ))
  // }

  render() {
    return (
      <div className='sounds'>
        <h1>Sounds</h1>
        <CreateSound />
        <button onClick={this.getSounds}>Get Sounds</button>
        <p>{this.state.sounds}</p>
      </div>
    )
  }

}

export default connect()(SoundsContainer)
