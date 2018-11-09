// logic aspects of login component
import React, { Component } from 'react'

class LoginContainer extends Component {

  state = {
    email: '',
    password: ''
  }

  handleLogin = (event) => {
    event.preventDefault()
    const email = event.target.children.email.value
    const password = event.target.children.password.value
    fetch('http://localhost:3000/api/user_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        auth: {
          email: email,
          password: password
        }
      })
    })
    .then(resp => resp.json())
    .then(data => localStorage.setItem('jwt', data.jwt))

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

export default LoginContainer
