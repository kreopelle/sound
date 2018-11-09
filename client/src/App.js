import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sounds: "",
    }
    // gives access to "this" to change state with getSounds()
    this.getSounds = this.getSounds.bind(this)
  }

  getSounds() {
    fetch("/api/sounds")
    .then(resp => resp.json())
    .then(sounds => this.setState({
      // would like to push each record as indiv objects to a sounds array
      sounds: JSON.stringify(sounds)
    }
    ))
  }

  login(event){
    // currently username and password in url as query?
    event.preventDefault()
    // later refactor to pull from this.state via an onChange handler
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    fetch("http://localhost:3000/api/user_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        auth: {
          email: email,
          password: password
        }
      })
    })
    .then(resp => resp.json())
    .then(data => localStorage.setItem("jwt", data.jwt))

  }

  render() {
    return (
      <div className='App'>
        <h1>Sounds</h1>

        <div className="login">
          <form onSubmit={this.login}>
            <label htmlFor="email">Email: </label>
            <br />
            <input
              name="email"
              id="email"
              type="email"
            />
            <br /><br />
            <label htmlFor="password">Password: </label>
            <br />
            <input
              name="password"
              id="password"
              type="password"
            />
            <br /><br />
            <input type="submit" />
          </form>
        </div>

        <div className="sounds">
          <br />
          <button onClick={this.getSounds}>Get Sounds</button>
          <p>{this.state.sounds}</p>
        </div>
      </div>
    );
  }
}

export default App;
