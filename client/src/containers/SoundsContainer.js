// business logic for displaying sounds
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sounds from '../components/sounds/Sounds.js'
import { fetchSounds } from '../actions/SoundActions'

class SoundsContainer extends Component {
  componentDidMount(){
    this.props.fetchSounds()
  }

  render() {
    return (
      <div className='sounds'>
        <h1>Sounds</h1>
        <Sounds sounds={this.props.sounds} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { sounds: state.sounds }
}

export default connect(mapStateToProps, { fetchSounds })(SoundsContainer)
