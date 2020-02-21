// top most, change based on state
// progress bar
//onboardingview is outer
// make new components for each page
// render name form
import React, { Component } from 'react';
import NameForm from './NameForm';
import SchoolForm from './SchoolForm';
import EmailForm from './EmailForm';
import RoleChoice from './RoleChoice';
// import NotificationChoice from './NotificationChoice';
import BasicInfoStart from './BasicInfoStart';
import HometownForm from './HometownForm';
import MajorChoice from './MajorChoice';
import SkillsForm from './SkillsForm';
import HobbiesForm from './HobbiesForm';
import BioForm from './BioForm';

export default class OnboardingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    // this.addUser = this.addUser.addUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
  }

  handleNextClick() {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
    console.log("This is the current page state: " + this.state.page);
  }

  handlePrevClick() {
    this.setState(prevState => ({
      page: prevState.page - 1
    }));
    console.log("This is the current page state: " + this.state.page);
  }

  handleSignUp() {
    this.addUser("Test Name", "Test Description", "http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg");
  }

  addUser (name, description, imageURL) {
    console.log("adding User: " + name + " " + description + " " + imageURL);
    let data = {
      id: "7",
      name: name,
      description: description,
      imageURL: imageURL
    };
    fetch("/api/addUser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log("Getting response back: ");
        console.log(response);
        this.getLinks(); // to do add to response
        return response;
      })
      .then(links => {
        this.props.onUserSessionUpdate("temp", true, "7"); // to update with sign up values
        return links;
      })
      .catch(error => {
        console.log("Add User error: ");
        console.log(error);
      })
  }

  // to do filter out self
  getLinks = () => {
    fetch("/api/getUsers", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      let linkData = data.users.filter(x => x.id === "7"); // to fix
      console.log("Found user? ");
      console.log(linkData);
    });
  }

  render() {
    if(this.state.page === 0) {
      return(<NameForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 1) {
      return(<SchoolForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 2) {
      return(<EmailForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 3) {
      return(<RoleChoice onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    // } else if (this.state.page === 4) {
    //   return (<NotificationChoice onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 4) {
      return (<BasicInfoStart onNextClick={this.handleNextClick}/>);
    } else if (this.state.page === 5) {
      return (<HometownForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 6) {
      return (<MajorChoice onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 7) {
      return (<SkillsForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 8) {
      return (<HobbiesForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 9) {
      return (<BioForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick} onSignUp={this.handleSignUp}/>);
    }
  }
}