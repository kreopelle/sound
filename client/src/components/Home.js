import React from 'react'
import { Jumbotron, Button, Clearfix } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// render content on static home page

const Home = () =>

<Clearfix>
    <Jumbotron>
      <h1 className="text-center">What's that?</h1>
        <p className="text-center">Listen to and share recordings from the field</p>
        <div className="text-center">
        <Button bsSize="large">
          <Link to="/sounds">Listen</Link>
        </Button>
        </div>
  </Jumbotron>
</Clearfix>;

export default Home
