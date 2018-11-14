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
    const title = event.target.children.title.value
    const description = event.target.children.description.value
    const sound = {sound: {title: title, description: description}}
    this.props.postSound(sound)
    this.setState({
      title: '',
      description: ''
    })
  }

  handleUpload = event => {
    this.setState({
      file: event.target.files[0]
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>create sound: </label>
          <input type="text" name="title" id="title" placeholder="title" onChange={this.handleOnChange} value={this.state.title} />
          <input type="text" name="description" id="description" placeholder="description" value={this.state.description} onChange={this.handleOnChange} />
          <input type="file" name="file" id="file" onChange={this.handleUpload} />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default CreateSound
