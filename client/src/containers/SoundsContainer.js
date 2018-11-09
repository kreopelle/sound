// business logic for displaying sounds
import React, { Component } from 'react'
import CreateSound from '../components/sounds/CreateSound.js'
import { connect } from 'react-redux'
import Sound from '../components/sounds/Sound.js'

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

  renderSounds = () => this.props.sounds.map((sound, id) => <Sound key={id} sound={sound} />)

  render() {
    return (
      <div className='sounds'>
        <h1>Sounds</h1>
        <CreateSound />
        {this.renderSounds()}
        {/* <button onClick={this.getSounds}>Get Sounds</button> */}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { sounds: state.sounds }
}

export default connect(mapStateToProps)(SoundsContainer)
