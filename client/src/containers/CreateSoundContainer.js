import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postSound } from '../actions/SoundActions'
import CreateSoundForm from '../components/sounds/CreateSoundForm'

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
  }

  handleUpload = event => {
    this.setState({
      file: event.target.files[0]
    })
  }

  render(){
    return(
      <div>
        <CreateSoundForm />
      </div>
    )
  }

}

export default connect(null, { postSound })(CreateSound)
