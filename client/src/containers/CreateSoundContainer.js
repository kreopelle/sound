import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postSound } from '../actions/SoundActions'
//import { Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class CreateSound extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      file: null
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const title = this.state.title
    const description = this.state.description
    const file = this.state.file
    const sound = {sound: {title: title, description: description, file: file}}
    this.props.postSound(sound)
    this.setState({
      title: '',
      description: '',
      file: null
    })
    document.getElementById("file").value = null
    this.props.history.push("/sounds")
  }

  handleUpload = event => {
    this.setState({
      file: event.target.files[0]
    })
  }

  render(){
    return(
      <div>
        <h2>Upload New Sound</h2>
        <br />
        <form onSubmit={this.handleOnSubmit}>
          {/*
          <Col xs={6} md={4}>
            <FormGroup bsSize="small">
              <FormControl
                type="text"
                name="title"
                id="title"
                placeholder="title"
                value={this.state.title}
                onChange={this.handleOnChange}
              />
            </FormGroup>
          </Col>
          */}

          <input type="text" name="title" id="title" placeholder="title" onChange={this.handleOnChange} value={this.state.title} />
          <input type="text" name="description" id="description" placeholder="description" value={this.state.description} onChange={this.handleOnChange} />
          <br /><br />
          <input type="file" name="file" id="file" onChange={this.handleUpload} />
          <br />
          <input type="submit" />

        </form>
      </div>
    )
  }

}

export default connect(null, { postSound })(CreateSound)
