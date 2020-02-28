// top most, change based on state
// progress bar
//onboardingview is outer
// make new components for each page
// render name form
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import NameFormV2 from './NameFormV2';
import SchoolFormV2 from './SchoolFormV2';
import EmailFormV2 from './EmailFormV2';
import RoleChoiceV2 from './RoleChoiceV2';
// import NotificationChoice from './NotificationChoice';
import BasicInfoStartV2 from './BasicInfoStartV2';
import HometownFormV2 from './HometownFormV2';
import MajorChoiceV2 from './MajorChoiceV2';
import SkillsFormV2 from './SkillsFormV2';
import HobbiesFormV2 from './HobbiesFormV2';
import BioFormV2 from './BioFormV2';


import { addUser, updateUser } from '../../api';

export default class OnboardingViewV2 extends Component {
  constructor(props) {
    super(props);

    // order of forms
    // Name
    // School
    // Email
    // Role
    // Hometown
    // Major
    // Skills
    // Hobbies
    // Bio

    this.state = {
      page: 0,
      // name
      firstName: "", 
      lastName: "",
      // school info
      schoolName: "",
      monthStart: "01",
      yearStart: "2009",
      monthEnd: "01",
      yearEnd: "2009",
      email: "",
      password: "",
      // role mentee or mentor
      role: "Mentor",
      hometown: "",
      major: "Aerospace Engineering",
      skills: "", // to change to list
      hobbies: "", // to change to list
      bio: ""
    };
    // paging handlers
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);

    // fields
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
    this.handleMonthStartChange = this.handleMonthStartChange.bind(this);
    this.handleYearStartChange = this.handleYearStartChange.bind(this);
    this.handleMonthEndChange = this.handleMonthEndChange.bind(this);
    this.handleYearEndChange = this.handleYearEndChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleHometownChange = this.handleHometownChange.bind(this);
    this.handleMajorChange = this.handleMajorChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
    this.handleHobbiesChange = this.handleHobbiesChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleNextClick() {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  }
  handlePrevClick() {
    this.setState(prevState => ({
      page: prevState.page - 1
    }));
  }

  handleSignUp() {
    this.signUpUser(); // add params?
  }

  signUpUser () {
    console.log("adding User: " + this.state.firstName + " " + this.state.lastName);
    // for demo purposes only
    let userId = (this.state.role === "Mentee") ? "13" : "14";
    let data = {
      userId: userId,
      firstName: this.state.firstName, 
      lastName: this.state.lastName,
      schoolName: this.state.schoolName,
      monthStart: this.state.monthStart,
      yearStart: this.state.yearStart,
      monthEnd: this.state.monthEnd,
      yearEnd: this.state.yearEnd,
      email: this.state.email,
      role: this.state.role,
      hometown: this.state.hometown,
      major: this.state.major,
      skills: this.state.skills,
      hobbies: this.state.hobbies, 
      bio: this.state.bio,
      imageURL: "https://i.pinimg.com/736x/2e/0a/f8/2e0af89dac4dbf2aae5bbca791adb4c6.jpg"
    };
    //const addUserPromise = addUser(data);
    const addUserPromise = updateUser(data, userId);
    addUserPromise.then(newUser => {
      console.log("Getting response back: ");
      console.log(newUser);
      this.props.onUserSessionUpdate(newUser.firstName + " " + newUser.lastName, true, newUser.id);
    })
    .catch(error => {
      console.log("Add User error: ");
      console.log(error);
    })
  }

  // name form
  handleFirstNameChange(val) {
    this.setState(prevState => ({
      firstName: val
    }));
  }
  handleLastNameChange(val) {
    this.setState(prevState => ({
      lastName: val
    }));
  }

  // school form
  handleSchoolNameChange(val) {
    this.setState(prevState => ({
      schoolName: val
    }));
  }
  handleMonthStartChange(val) {
    this.setState(prevState => ({
      monthStart: val
    }));
  }
  handleYearStartChange(val) {
    this.setState(prevState => ({
      yearStart: val
    }));
  }
  handleMonthEndChange(val) {
    this.setState(prevState => ({
      monthEnd: val
    }));
  }
  handleYearEndChange(val) {
    this.setState(prevState => ({
      yearEnd: val
    }));
  }

  // email form
  handleEmailChange(val) {
    this.setState(prevState => ({
      email: val
    }));
  }
  handlePasswordChange(val) {
    this.setState(prevState => ({
      password: val
    }));
  }
  // role form
  handleRoleChange(val) {
    this.setState(prevState => ({
      role: val
    }));
  }

  // hometown form
  handleHometownChange(val) {
    this.setState(prevState => ({
      hometown: val
    }));
  }

  // major form
  handleMajorChange(val) {
    this.setState(prevState => ({
      major: val
    }));
  }

  // skills form
  handleSkillsChange(val) {
    this.setState(prevState => ({
      skills: val
    }));
  }

  // hobbies form
  handleHobbiesChange(val) {
    this.setState(prevState => ({
      hobbies: val
    }));
  }

  // bio form
  handleBioChange(val) {
    this.setState(prevState => ({
      bio: val
    }));
  }

  render() {
    return(
      <Container>
        <NameFormV2 onNextClick={this.handleNextClick} 
                    onPrevClick={this.handlePrevClick} 
                    onFirstNameChange={this.handleFirstNameChange} 
                    onLastNameChange={this.handleLastNameChange} 
        />
        <SchoolFormV2 onNextClick={this.handleNextClick} 
                      onPrevClick={this.handlePrevClick}
                      onSchoolNameChange={this.handleSchoolNameChange}
                      onMonthStartChange={this.handleMonthStartChange}
                      onYearStartChange={this.handleYearStartChange}
                      onMonthEndChange={this.handleMonthEndChange}
                      onYearEndChange={this.handleYearEndChange}
        />
        <EmailFormV2  onNextClick={this.handleNextClick} 
                      onPrevClick={this.handlePrevClick}
                      onEmailChange={this.handleEmailChange}
                      onPasswordChange={this.handlePasswordChange}
        />
        <RoleChoiceV2 onNextClick={this.handleNextClick} 
                      onPrevClick={this.handlePrevClick}
                      onRoleChange={this.handleRoleChange}
        />
        <BasicInfoStartV2 onPrevClick={this.handlePrevClick} 
                          onNextClick={this.handleNextClick}
        />
        <HometownFormV2 onNextClick={this.handleNextClick} 
                        onPrevClick={this.handlePrevClick}
                        onHometownChange={this.handleHometownChange}
        />
        <MajorChoiceV2  onNextClick={this.handleNextClick} 
                        onPrevClick={this.handlePrevClick}
                        onMajorChange={this.handleMajorChange}
        />
        <SkillsFormV2 onNextClick={this.handleNextClick} 
                      onPrevClick={this.handlePrevClick}
                      onSkillsChange={this.handleSkillsChange}
        />
        <HobbiesFormV2  onNextClick={this.handleNextClick} 
                        onPrevClick={this.handlePrevClick}
                        onHobbiesChange={this.handleHobbiesChange}
        />
        <BioFormV2  onNextClick={this.handleNextClick} 
                    onPrevClick={this.handlePrevClick} 
                    onBioChange={this.handleBioChange}
                    onSignUp={this.handleSignUp}
        />
      </Container>
    );
  }
}