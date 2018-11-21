import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sound from '../components/Sound.js'
import { deleteSound, favoriteSound } from '../actions/SoundActions.js'
import Search from '../components/Search.js'

class SoundsContainer extends Component {

  render() {
    const { sounds, deleteSound, favoriteSound } = this.props
    const soundList = sounds.map((sound, id) => <Sound key={id} sound={sound} deleteSound={deleteSound} favoriteSound={favoriteSound} />)

    return (
      <div className="container" >
        <h1 className="text-center">Sounds</h1>
        <Search />
        {soundList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { sounds: state.sounds }
}

const mapDispatchToProps = (dispatch, soundId) => {
  return {
    deleteSound: (soundId) => {
      dispatch(deleteSound(soundId))
    },
    favoriteSound: (soundId) => {
      dispatch(favoriteSound(soundId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundsContainer)
