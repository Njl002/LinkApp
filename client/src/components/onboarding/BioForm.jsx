import React, { Component } from 'react';
import { Button, Container, Row, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TextareaAutosize from 'react-textarea-autosize';
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
      <Container className="bio-view">
        <Row className="back-row">
          <Button variant="primary" type="submit" bsPrefix="bio-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h2> Add a photo! </h2>
        </Row>
        <Row>
          {photoOrButton}
        </Row>
        <Row>
          <h2> What are you looking for in your partnership? </h2>
        </Row>
        <Row>
          <TextareaAutosize
            className="bio-form"
            maxRows={6}
            minRows={1}
            onChange={e => this.props.onBioChange(e.target.value)}
            placeholder="Add your bio here"
          />
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