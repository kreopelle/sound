import React, { Component } from 'react'
import Sound from './Sound'

// create individual sound cards for all sounds in db

class Sounds extends Component {
  render(){
    const { sounds } = this.props
    const soundList = sounds.map((sound, id) => <Sound key={id} sound={sound} />)
    return (
      <div>
        {soundList}
      </div>
    )
  }
}

export default Sounds
