import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default class NotificationChoiceV2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Button variant="primary" type="submit" onClick={this.props.onPrevClick}>
            Back
          </Button>
        </Row>
        <Row>
          <h1> Enable notifications? </h1>
        </Row>
        <Row>
          <h2> Never miss a successful link with a potential mentor. </h2>
        </Row>
        <Row>
          <ButtonToolbar>
            <ToggleButtonGroup vertical type="radio" name="notificationsToggle" defaultValue={1}>
              <ToggleButton value={1}>Enable Notifications </ToggleButton>
              <ToggleButton value={2}>Disable Notifications </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Row>
        <Row>
          <Button
            variant="primary" type="submit"
            onClick={() => {
              this.props.onNextClick();
            }}
            >
            >
          </Button>
        </Row>
      </Container>
    )
  }

}