// code to render an individual sound card
// should render a comments container for comments related to the specific sound
import React from 'react'

const Sound = ({ sound }) => {
  return (
    <li><strong>{sound.title}</strong>: {sound.description}</li>
  )
}

export default Sound
