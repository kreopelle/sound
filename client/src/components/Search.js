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
    this.setState({
      query: event.target.value
    })
    console.log(this.state.query)
  }

  render(){
    return(
      <Col xs={6} md={4}>
        <Thumbnail>
          <form onSubmit={ event => this.props.submit(event) }>
            <input type="text" id="query" placeholder="Filter Sounds" value={this.state.query} onChange={event => this.handleChange(event)} /> <input className="btn btn-info" type="submit" value="Search" />
          </form>
          </Thumbnail>
      </Col>
    )
  }
}

export default Search
