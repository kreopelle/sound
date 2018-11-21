import React from 'react'
import { Col, Thumbnail } from 'react-bootstrap'
import AudioPlayer from './AudioPlayer.js'

// render an individual sound card

const Sound = ({ sound, deleteSound, favoriteSound }) => {
  return (
    <Col xs={6} md={4}>
      <Thumbnail>
        <h3>{sound.title}</h3>
        <p>{sound.description}</p>
        <br />
        <AudioPlayer src={sound.sound_url} />
      </Thumbnail>
    </Col>
  )
}

export default Sound
