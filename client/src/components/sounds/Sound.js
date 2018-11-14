// code to render an individual sound card
// should render a comments container for comments related to the specific sound
import React from 'react'

const Sound = ({ sound }) => {
  return (
    <li>
      <p><strong>{sound.title}</strong>: {sound.description}</p>
      <br />
      <audio controls>
        <source src={sound.sound_url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </li>
  )
}

export default Sound
