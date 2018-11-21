import React from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      query: ""
    }
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  render(){
    return(
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>{' '}
        <Button type="submit">Search</Button>
      </Navbar.Form>
    )
  }
}

export default Search

// non-bootstrapped search form
// <div className="search">
//   <form onSubmit={ event => this.props.submit(event) }>
//     <input type="text" id="query" placeholder="Find Sounds" value={this.state.query} onChange={event => this.handleChange(event)} /> <input className="btn btn-info" type="submit" value="Search" />
//   </form>
// </div>
