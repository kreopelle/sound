import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sound from '../components/Sound.js'
import { deleteSound, favoriteSound } from '../actions/SoundActions.js'
import Search from '../components/Search.js'
import { Col, Thumbnail } from 'react-bootstrap'

class SoundsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      currentlyDisplayed: this.props.sounds
    }
    this.onQuery = this.onQuery.bind(this)
  }

  onQuery = event => {
    let filteredSounds = this.props.sounds.filter(sound => sound.title.toLowerCase().includes(event.target.value.toLowerCase()) || sound.description.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({
      query: event.target.value,
      currentlyDisplayed: filteredSounds
    })
  }

  render() {
    const { deleteSound, favoriteSound } = this.props
    const soundList = this.state.currentlyDisplayed.map((sound, id) => <Sound key={id} sound={sound} deleteSound={deleteSound} favoriteSound={favoriteSound} />)

    return (
      <div className="container" >
        <Col xs={6} md={4}>
          <Thumbnail>
            <h1> Sounds </h1>
            <p> Start typing to filter sounds by title or description </p>
            <br />
            <form>
              <input type="text" id="query" placeholder="Filter Sounds" value={this.state.query} onChange={this.onQuery} /> <input className="btn btn-info" type="submit" value="Search" />
            </form>
            </Thumbnail>
        </Col>
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
