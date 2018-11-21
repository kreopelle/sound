import React from 'react'
import { Col, Thumbnail } from 'react-bootstrap'

const Search = ({ onQuery }) => {
  return(
    <Col xs={6} md={4}>
      <Thumbnail>
        <h1> Sounds </h1>
        <p> Start typing to filter sounds by title or description </p>
        <br />
        <form>
          <input type="text" id="query" placeholder="Filter Sounds" onChange={event => onQuery(event)} />
        </form>
        </Thumbnail>
    </Col>
  )
}

export default Search
