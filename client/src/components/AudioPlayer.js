import React from 'react'

// render audio player for sounds 

const AudioPlayer = ({ src }) => {
  return(
    <audio controls>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}

export default AudioPlayer
