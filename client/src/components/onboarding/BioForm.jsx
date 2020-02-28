import React, { Component } from 'react';
import { Button, Container, Row, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { navConsts } from '../../constants';

export default class BioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSet: false
    }
  }

  render() {

    let photoOrButton = this.state.photoSet ? (
      <Image src="https://i.pinimg.com/736x/2e/0a/f8/2e0af89dac4dbf2aae5bbca791adb4c6.jpg" style={{ width: '5rem', height: '5rem'}}/>)
      : (
        <Button variant="primary" type="submit" onClick={() => this.setState({photoSet: true})}>
            +
        </Button>
      );

    return (
      <Container>
        <Row>
          <Button variant="primary" type="submit" onClick={this.props.onPrevClick}>
            Back
          </Button>
        </Row>
        <Row>
          <h1> Add a photo! </h1>
        </Row>
        <Row>
          {photoOrButton}
        </Row>
        <Row>
          {/* <h2> Drag to reorder </h2> */}
        </Row>
        <Row>
          <h1> What are you looking for in your partnership? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="bio" name="bioForm" onChange={e => this.props.onBioChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Link to={"/"}>
          <Button variant="primary" type="submit" onClick={this.props.onSignUp}>
            Finish
          </Button>
          </Link>
        </Row>
      </Container>
    )
  }

}