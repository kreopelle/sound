import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/LoginActions'

// business and presentational logic for login component

class LoginContainer extends Component {

  state = {
    email: '',
    password: ''
  }

  handleLogin = event => {
    event.preventDefault()
    const email = event.target.children.email.value
    const password = event.target.children.password.value
    const auth = { auth: { email: email, password: password } }
    this.props.login(auth)
    this.setState({
      email: '',
      password: ''
    })
    this.props.history.push('/sounds')
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <label htmlFor='email'>Email: </label>
          <input name='email' id='email' type='email'onChange={this.handleOnChange} />
          <br />
          <label htmlFor='password'>Password: </label>
          <input name='password' id='password' type='password' onChange={this.handleOnChange} />
          <br />
          <input type='submit' />
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return { login: auth => dispatch(login(auth)) }
}

export default connect(null, mapDispatchToProps)(LoginContainer)
