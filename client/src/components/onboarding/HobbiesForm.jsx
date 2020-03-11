import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CurrentHobbies from './CurrentHobbies';
import './css/HobbiesForm.css';

export default class HobbiesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hobbiesForm: "",
      hobbies: this.props.hobbiesList
    };

    this.handleAddHobby = this.handleAddHobby.bind(this);
    this.handleRemoveHobby = this.handleRemoveHobby.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleAddHobby() {
    console.log("Register click");
    console.log(this.state.hobbiesForm);
    if (this.state.hobbiesForm != "") {
      this.setState(prevState => {
        if (this.state.hobbies.includes(this.state.hobbiesForm)) {
          return {
            hobbiesForm: ""
          };
        } else {
          return {
            hobbiesForm: "",
            hobbies: [...prevState.hobbies, prevState.hobbiesForm]
          };
        }
      });
    }
  }

  handleRemoveHobby(index) {
    this.setState(prevState => {
      return {
        hobbies: prevState.hobbies.filter((_, i) => i !== index)
      };
    });
  }

  handleSubmission() {
    let hobbiesString = "";
    this.state.hobbies.forEach(function (entry) {
      hobbiesString += entry + ", ";
    });
    console.log(hobbiesString);
    hobbiesString = hobbiesString.slice(0, -2);
    console.log(hobbiesString);
    this.props.onHobbiesChange(hobbiesString);
    this.props.onHobbiesListChange(this.state.hobbies);
    this.props.onNextClick();
  }

  render() {
    return (
      <Container className="hobbies-view">
        <Row className="back-row">
          <Button variant="primary" type="submit" bsPrefix="hobbies-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h1> What are some of your hobbies and interests? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="hobbiesForm" bsPrefix="hobbies-form" placeholder="Hobbies & Interests"
                onChange={e => this.setState({ hobbiesForm: e.target.value })}
                value={this.state.hobbiesForm} />
            </Form.Group>
          </Form>
          <Button bsPrefix="add-hobby-button" onClick={this.handleAddHobby}>
            +Hobby
          </Button>
        </Row>
        <Row>
          <CurrentHobbies
            onRemoveHobby={this.handleRemoveHobby}
            hobbies={this.state.hobbies}
          />
        </Row>
        <Row>
          <Button
            variant="primary" type="submit"
            bsPrefix="hobbies-next-button"
            onClick={this.handleSubmission}
          >
            <FiChevronRight />
          </Button>
        </Row>
      </Container>
    )
  }

}