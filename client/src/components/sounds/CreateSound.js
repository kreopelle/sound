import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateSound extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form>
          <p>
            <label>create sound: </label>
            <input type="text" name="title" placeholder="title" onChange={this.handleOnChange} value={this.state.title} />
            <input type="text" name="description" placeholder="description" value={this.state.description} onChange={this.handleOnChange} />
            <input type="submit" />
          </p>
        </form>
      </div>
    )
  }

}

export default CreateSound
