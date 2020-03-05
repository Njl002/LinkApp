import React, { Component } from 'react';
import { Container, Row, Button} from 'react-bootstrap';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

import { navConsts } from '../../constants';


import './css/LoginView.css';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    this.props.handleTracking();
  }

  // TODO give login check functionality
  handleLogin(email, password) {
    // give actually user/pass checking functionality later

    // default log in as id = "13"
    if (email === "") {
      this.props.onUserSessionUpdate(email, true, "13");
    }
    // to allow for user to log in as any id value
    else {
      this.props.onUserSessionUpdate(email, true, email);
    }
  }


  render() {
    const { LAUNCH } = navConsts;

    return (
      <Container className="loginFormContainer">
        <Row>
          <Link to={"/" + LAUNCH}>
            <Button variant="primary" type="submit" bsPrefix="loginView-back_button">
              <FiChevronLeft />
            </Button>
          </Link>
        </Row>
        <Row>
          <LoginForm 
            onLogin={this.handleLogin} 
          />
        </Row>
      </Container>
    );
  }
}