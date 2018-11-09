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
    event.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const request = {"auth": {"email": email, "password": password}}
    console.log(request)
    fetch("/api/user_token", {
      method: "POST",
      data: request,
      dataType: "json"
    })
    .then(resp => resp.json())
    .then(result => {
      console.log(result)
      return localStorage.setItem("jwt", result.jwt)
      }
    )

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
