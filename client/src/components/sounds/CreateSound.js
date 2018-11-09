import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    this.props.addSound(this.state)
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

const mapDispatchToProps = dispatch => {
  return {
    addSound: formData => dispatch({ type: "ADD_SOUND", payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateSound)
