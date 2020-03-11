import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CurrentSkills from './CurrentSkills';
import './css/SkillsForm.css';

export default class SkillsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillsForm: "",
      skills: []
    };

    this.handleAddSkill = this.handleAddSkill.bind(this);
    this.handleRemoveSkill = this.handleRemoveSkill.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleAddSkill() {
    console.log("Register click");
    console.log(this.state.skillsForm);
    if (this.state.skillsForm != "") {
      this.setState(prevState => {
        if (this.state.skills.includes(this.state.skillsForm)) {
          return {
            skillsForm: ""
          };
        } else {
          return {
            skillsForm: "",
            skills: [...prevState.skills, prevState.skillsForm]
          };
        }
      });
    }
  }

  handleRemoveSkill(index) {
    this.setState(prevState => {
      return {
        skills: prevState.skills.filter((_, i) => i !== index)
      };
    });
  }

  handleSubmission() {
    let skillsString = "";
    this.state.skills.forEach(function (entry) {
      skillsString += entry + ", ";
    });
    console.log(skillsString);
    skillsString = skillsString.slice(0, -2);
    console.log(skillsString);
    this.props.onSkillsChange(skillsString);
    this.props.onNextClick();
  }

  render() {
    return (
      <Container className="skills-view">
        <Row className="back-row">
          <Button variant="primary" type="submit" bsPrefix="skills-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h1> What are some of your skills? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="skillsForm" bsPrefix="skills-form" placeholder="Skills"
                onChange={e => this.setState({ skillsForm: e.target.value })}
                value={this.state.skillsForm} />
            </Form.Group>
          </Form>
          <Button bsPrefix="add-skills-button" onClick={this.handleAddSkill}>
            +Skill
          </Button>
        </Row>
        <Row>
          <CurrentSkills
            onRemoveSkill={this.handleRemoveSkill}
            skills={this.state.skills}
          />
        </Row>
        <Row>
          <Button variant="primary" type="submit" bsPrefix="skills-next-button" onClick={this.handleSubmission}>
            <FiChevronRight />
          </Button>
        </Row>
      </Container>
    )
  }

}