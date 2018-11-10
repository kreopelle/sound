import React, { Component } from 'react'

class CreateSound extends Component {
  state = {
      title: '',
      description: '',
    }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    debugger
    // this.props.postSound(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
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
