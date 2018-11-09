// code to create individual sound cards for all sounds in db
import React, { Component } from 'react'
import Sound from './Sound'

class Sounds extends Component {
  render(){
    const { sounds } = this.props
    const soundList = sounds.map((sound, id) => <Sound key={id} sound={sound} />)

    return (
      <ul>
      {soundList}
      </ul>
    )
  }
}

export default Sounds
