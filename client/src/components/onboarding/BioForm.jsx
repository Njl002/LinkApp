import React, { Component } from 'react';
import { Button, Container, Row, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { navConsts } from '../../constants';
import './css/BioForm.css';

export default class BioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSet: false
    }
  }

  render() {

    let photoOrButton = this.state.photoSet ? (
      <Image src={require('../../resources/images/profile/user_image.jpg')} style={{ width: '5rem', height: '5rem'}}/>)
      : (
        <Button variant="primary" type="submit" bsPrefix="bio-add-button" onClick={() => this.setState({photoSet: true})}>
            +
        </Button>
      );

    return (
      <Container>
        <Row>
          <Button variant="primary" type="submit" bsPrefix="bio-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
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
              <Form.Control type="bio" name="bioForm" bsPrefix="bio-form" placeholder="Add your bio here" onChange={e => this.props.onBioChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Link to={"/"}>
          <Button variant="primary" type="submit" bsPrefix="bio-finish-button" onClick={this.props.onSignUp}>
            Finish
          </Button>
          </Link>
        </Row>
      </Container>
    )
  }

}