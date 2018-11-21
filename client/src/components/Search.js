import React from 'react'
import { Col, Thumbnail } from 'react-bootstrap'

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      query: ""
    }
    this.handleChange.bind(this)
  }

  handleChange = event => {
    this.props.onQuery(event)
  }

  render(){
    return(
      <Col xs={6} md={4}>
        <Thumbnail>
          <h1> Sounds </h1>
          <p> Start typing to filter sounds by title or description </p>
          <br />
          <form onSubmit={ event => this.props.submit(event) }>
            <input type="text" id="query" placeholder="Filter Sounds" value={this.state.query} onChange={event => this.handleChange(event)} /> <input className="btn btn-info" type="submit" value="Search" />
          </form>
          </Thumbnail>
      </Col>
    )
  }
}

export default Search
