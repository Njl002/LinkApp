(this["webpackJsonplink-app-client"]=this["webpackJsonplink-app-client"]||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/blank-profile-picture.5a021ab9.png"},41:function(e,t,n){e.exports=n(58)},47:function(e,t,n){},48:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(22),o=n.n(r),c=n(11),i=(n(46),n(47),n(48),n(5)),s=n(6),u=n(8),m=n(7),p=n(13),h=n(9),E=n(19),d="launch",f="links",g="link",b="user_profile",k="messages",v="login",C="onboarding",j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=d,t=f;return this.props.isAuthenticated?l.a.createElement(E.a,{to:t}):l.a.createElement(E.a,{to:e})}}]),t}(a.Component),y=n(60),O=n(61),S=n(36),N=n(39),x=(n(31),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=v,t=C;return l.a.createElement(y.a,{fluid:!0},l.a.createElement(O.a,null,l.a.createElement(S.a,{xs:6,md:4},l.a.createElement("h1",null," TEMPORARY LOGO "))),l.a.createElement(O.a,null,l.a.createElement(S.a,{xs:6,md:4},l.a.createElement(c.b,{to:"/"+t},l.a.createElement(N.a,null," Get Started ")))),l.a.createElement(O.a,null,l.a.createElement(S.a,{xs:6,md:4},l.a.createElement(c.b,{to:"/"+e},l.a.createElement(N.a,null," Login ")))))}}]),t}(a.Component)),U=n(65),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Label,null,"Username"),l.a.createElement(U.a.Control,{placeholder:"Enter username",onChange:function(t){return e.setState({username:t.target.value})}})),l.a.createElement(U.a.Group,{controlId:"formBasicPassword"},l.a.createElement(U.a.Label,null,"Password"),l.a.createElement(U.a.Control,{type:"password",placeholder:"Password",onChange:function(t){return e.setState({password:t.target.value})}})),l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onLogin(e.state.username,e.state.password)}},"Submit"))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleLogin=n.handleLogin.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleLogin",value:function(e,t){this.props.onUserSessionUpdate(e,!0,"7")}},{key:"render",value:function(){return l.a.createElement(y.a,null,l.a.createElement(S.a,null,l.a.createElement(L,{onLogin:this.handleLogin})))}}]),t}(a.Component),M=(n(56),n(66)),P=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=g;return l.a.createElement(M.a,{style:{width:"18rem"}},l.a.createElement(c.b,{to:"/"+e+"/"+this.props.id},l.a.createElement(M.a.Img,{variant:"top",src:this.props.imageURL,style:{width:"18rem"}})),l.a.createElement(M.a.Body,null,l.a.createElement(M.a.Title,null,this.props.name),l.a.createElement(M.a.Text,null,this.props.description)))}}]),t}(a.Component),A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).getLinks=function(){fetch("/api/getUsers",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.users.filter((function(e){return e.id!==n.props.userId}));n.setState({links:t})}))},n.state={links:[]},n.getLinks=n.getLinks.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getLinks()}},{key:"render",value:function(){var e=this.state.links.map((function(e){return l.a.createElement(S.a,{xs:6,md:6,key:e.id},l.a.createElement(P,{id:e.id,name:e.name,description:e.description,imageURL:e.imageURL}))}));return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement("h1",null," Today's Links ")),l.a.createElement(O.a,null,e))}}]),t}(a.Component),I=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={id:e.match.params.id,name:"",description:"",imageURL:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getLink(this.state.id)}},{key:"getLink",value:function(e){var t=this;fetch("/api/getUsers",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(n){var a=n.users.find((function(t){return t.id===e}));t.setState({id:a.id,name:a.name,description:a.description,imageURL:a.imageURL})}))}},{key:"render",value:function(){return l.a.createElement(M.a,{style:{width:"18rem"}},l.a.createElement(M.a.Img,{variant:"top",src:this.state.imageURL,style:{width:"18rem"}}),l.a.createElement(M.a.Body,null,l.a.createElement(M.a.Title,null,this.state.name),l.a.createElement(M.a.Text,null,this.state.description)))}}]),t}(a.Component),F={getUsername:function(){return sessionStorage.getItem("username")},setUsername:function(e){sessionStorage.setItem("username",e)},getAuthenticated:function(){return"true"===sessionStorage.getItem("isAuthenticated")},setAuthenticated:function(e){sessionStorage.setItem("isAuthenticated",e)},getId:function(){return sessionStorage.getItem("userId")},setId:function(e){sessionStorage.setItem("userId",e)}},B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={id:"",name:"",description:"",imageUrl:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=F.getId();this.getUser(e)}},{key:"getUser",value:function(e){var t=this;fetch("/api/getUsers",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(n){var a=n.users.find((function(t){return t.id===e}));t.setState({id:a.id,name:a.name,description:a.description,imageURL:a.imageURL})}))}},{key:"render",value:function(){return l.a.createElement(M.a,{style:{width:"18rem"}},l.a.createElement(M.a.Img,{variant:"top",src:this.state.imageURL,style:{width:"18rem"}}),l.a.createElement(M.a.Body,null,l.a.createElement(M.a.Title,null,this.state.name),l.a.createElement(M.a.Text,null,this.state.description)))}}]),t}(a.Component),T=n(62),G=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(M.a,{style:{width:"100%"}},l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(S.a,null,l.a.createElement(T.a,{src:this.props.partnerImageURL,roundedCircle:!0,style:{width:"5rem",height:"6rem",float:"left"}})),l.a.createElement(S.a,null,l.a.createElement(M.a.Title,null," ",this.props.partnerName," "),l.a.createElement(M.a.Body,null,l.a.createElement(M.a.Text,null," ",this.props.lastMessage," "))))))}}]),t}(a.Component);var R=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={messages:[]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=F.getId();this.getDisplayMessages(t).then((function(t){console.log(t),e.setState({messages:t})})).catch((function(e){console.log("setting messages view state error: "),console.log(e)}))}},{key:"getDisplayMessages",value:function(e){var t=fetch("/api/getUsers",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.log("get user error: "),console.log(e)}));return console.log(t),t.then((function(e){return console.log("Got users response: "),console.log(e),e.users})).then((function(t){return fetch("/api/getMessages",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.log("get user error: "),console.log(e)})).then((function(t){return console.log("Got messages response: "),console.log(t),t.messages.filter((function(t){return t.to===e||t.from===e}))})).then((function(e){return e.sort((function(e,t){return new Date(t.timeStamp)-new Date(e.timeStamp)})),e})).then((function(e){var t=[];return e.forEach((function(e){var n=!1;t.forEach((function(t){(e.to===t.to&&e.from===t.from||e.to===t.from&&e.from===t.to)&&(n=!0)})),n||(e.name=e,t.push(e))})),t})).then((function(n){return n.forEach((function(n){var a="",l="";if(n.to!=e){var r=t.find((function(e){return e.id===n.to}));a=r.name,l=r.imageURL}else if(n.to==e){var o=t.find((function(e){return e.id===n.from}));a=o.name,l=o.imageURL}n.name=a,n.imageURL=l})),console.log("Filtered messages: "),console.log(n),n})).catch((function(e){console.log("Get all messages error: "),console.log(e)}))})).catch((function(e){console.log("Get all users error: "),console.log(e)}))}},{key:"render",value:function(){var e=this.state.messages.map((function(e){return l.a.createElement(S.a,{xs:12,md:9,key:e.to+e.from},l.a.createElement(G,{partnerName:e.name,lastMessage:e.body,partnerImageURL:e.imageURL}))}));return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement("h1",null," Messages ")),l.a.createElement(O.a,null,e))}}]),t}(a.Component),Y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={sFirstName:"",sLastName:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=d;return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(c.b,{to:"/"+t},l.a.createElement(N.a,{variant:"primary",type:"submit"},"Back"))),l.a.createElement(O.a,null,l.a.createElement("h1",null," My name is ")),l.a.createElement(O.a,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{type:"text",name:"firstNameForm",placeholder:"First Name",onChange:function(t){return e.setState({sFirstName:t.target.value},(function(){console.log("New First Name:",e.state.sFirstName)}))}})))),l.a.createElement(O.a,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{type:"text",name:"lastNameForm",placeholder:"Last Name",onChange:function(t){return e.setState({sLastName:t.target.value},(function(){console.log("New Last Name:",e.state.sLastName)}))}})))),l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onNextClick()}},">")))}}]),t}(a.Component),D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={sSchoolName:"",sMonthStart:"",sYearStart:"",sMonthEnd:"",sYearEnd:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"Back")),l.a.createElement(O.a,null,l.a.createElement("h1",null," I attend ")),l.a.createElement(O.a,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{type:"text",name:"schoolNameForm",placeholder:"Your school name",onChange:function(t){return e.setState({sSchoolName:t.target.value},(function(){console.log("New School Name:",e.state.sSchoolName)}))}})))),l.a.createElement(O.a,null,l.a.createElement("h2",null," From ")),l.a.createElement(O.a,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{name:"startMonthForm",as:"select",onChange:function(t){return e.setState({sMonthStart:t.target.value},(function(){console.log("New starting month:",e.state.sMonthStart)}))}},l.a.createElement("option",null,"01"),l.a.createElement("option",null,"02"),l.a.createElement("option",null,"03"),l.a.createElement("option",null,"04"),l.a.createElement("option",null,"05"),l.a.createElement("option",null,"06"),l.a.createElement("option",null,"07"),l.a.createElement("option",null,"08"),l.a.createElement("option",null,"09"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12")),l.a.createElement(U.a.Label,null,"Month"))),l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{name:"startYearForm",as:"select",onChange:function(t){return e.setState({sYearStart:t.target.value},(function(){console.log("New starting year:",e.state.sYearStart)}))}},l.a.createElement("option",null,"2009"),l.a.createElement("option",null,"2010"),l.a.createElement("option",null,"2011"),l.a.createElement("option",null,"2012"),l.a.createElement("option",null,"2013"),l.a.createElement("option",null,"2014"),l.a.createElement("option",null,"2015"),l.a.createElement("option",null,"2016"),l.a.createElement("option",null,"2017"),l.a.createElement("option",null,"2018"),l.a.createElement("option",null,"2019"),l.a.createElement("option",null,"2020"),l.a.createElement("option",null,"2021"),l.a.createElement("option",null,"2022"),l.a.createElement("option",null,"2023"),l.a.createElement("option",null,"2024"),l.a.createElement("option",null,"2025")),l.a.createElement(U.a.Label,null,"Year")))),l.a.createElement(O.a,null,l.a.createElement("h2",null," To ")),l.a.createElement(O.a,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{name:"endMonthForm",as:"select",onChange:function(t){return e.setState({sMonthEnd:t.target.value},(function(){console.log("New ending month:",e.state.sMonthEnd)}))}},l.a.createElement("option",null,"01"),l.a.createElement("option",null,"02"),l.a.createElement("option",null,"03"),l.a.createElement("option",null,"04"),l.a.createElement("option",null,"05"),l.a.createElement("option",null,"06"),l.a.createElement("option",null,"07"),l.a.createElement("option",null,"08"),l.a.createElement("option",null,"09"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12")),l.a.createElement(U.a.Label,null,"Month"))),l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{name:"endYearForm",as:"select",onChange:function(t){return e.setState({sYearEnd:t.target.value},(function(){console.log("New ending year:",e.state.sYearEnd)}))}},l.a.createElement("option",null,"2009"),l.a.createElement("option",null,"2010"),l.a.createElement("option",null,"2011"),l.a.createElement("option",null,"2012"),l.a.createElement("option",null,"2013"),l.a.createElement("option",null,"2014"),l.a.createElement("option",null,"2015"),l.a.createElement("option",null,"2016"),l.a.createElement("option",null,"2017"),l.a.createElement("option",null,"2018"),l.a.createElement("option",null,"2019"),l.a.createElement("option",null,"2020"),l.a.createElement("option",null,"2021"),l.a.createElement("option",null,"2022"),l.a.createElement("option",null,"2023"),l.a.createElement("option",null,"2024"),l.a.createElement("option",null,"2025")),l.a.createElement(U.a.Label,null,"Year")))),l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onNextClick()}},">")))}}]),t}(a.Component),H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={sEmail:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"Back")),l.a.createElement(O.a,null,l.a.createElement("h1",null," My school email is ")),l.a.createElement(O.a,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{type:"text",name:"emailForm",placeholder:"School email",onChange:function(t){return e.setState({sEmail:t.target.value},(function(){console.log("New email:",e.state.sEmail)}))}})))),l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onNextClick()}},">")))}}]),t}(a.Component),W=n(63),_=n(67),J=n(37),q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={sLookingForMentee:!1,sLookingForMentor:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"Back")),l.a.createElement(O.a,null,l.a.createElement("h1",null," I am looking for a ")),l.a.createElement(O.a,null,l.a.createElement(W.a,null,l.a.createElement(_.a,{type:"checkbox",name:"lookingForMentor",onChange:function(t){return e.setState({sLookingForMentor:!e.state.sLookingForMentor},(function(){console.log("Looking for mentor? : ",e.state.sLookingForMentor)}))}},l.a.createElement(J.a,null,"Mentor")))),l.a.createElement(O.a,null,l.a.createElement(W.a,null,l.a.createElement(_.a,{type:"checkbox",name:"lookingForMentee",onChange:function(t){return e.setState({sLookingForMentee:!e.state.sLookingForMentee},(function(){console.log("Looking for mentee? : ",e.state.sLookingForMentee)}))}},l.a.createElement(J.a,null,"Mentee")))),l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onNextClick()}},">")))}}]),t}(a.Component),V=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement("h1",null," Adding basic info links you to better connections. ")),l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onNextClick()}},"Add basic info")))}}]),t}(a.Component),$=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={sHometown:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"Back")),l.a.createElement(O.a,null,l.a.createElement("h1",null," Where is your hometown? ")),l.a.createElement(O.a,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{type:"text",name:"hometownForm",placeholder:"Add city",onChange:function(t){return e.setState({sHometown:t.target.value},(function(){console.log("New hometown:",e.state.sHometown)}))}})))),l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onNextClick()}},">")))}}]),t}(a.Component),z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={sMajor:""},n.handleToggle=n.handleToggle.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleToggle",value:function(e){var t=this;this.setState({sMajor:e},(function(){console.log("New major:",t.state.sMajor)}))}},{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"Back")),l.a.createElement(O.a,null,l.a.createElement("h1",null," Hi Bianca, ")),l.a.createElement(O.a,null,l.a.createElement("h2",null," Pick a major. ")),l.a.createElement(O.a,null,l.a.createElement(W.a,null,l.a.createElement(_.a,{vertical:!0,type:"radio",name:"majorToggle",defaultValue:"Aerospace Engineering",onChange:this.handleToggle},l.a.createElement(J.a,{value:"Aerospace Engineering"},"Aerospace Engineering"),l.a.createElement(J.a,{value:"BioInformatics"},"BioInformatics"),l.a.createElement(J.a,{value:"Biomedical Engineering"},"Biomedical Engineering"),l.a.createElement(J.a,{value:"Chemical Engineering"},"Chemical Engineering"),l.a.createElement(J.a,{value:"Civil Engineering"},"Civil Engineering"),l.a.createElement(J.a,{value:"Cognitive Science"},"Cognitive Science"),l.a.createElement(J.a,{value:"Computer Science"},"Computer Science")))),l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onNextClick()}},">")))}}]),t}(a.Component),K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={sSkills:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"Back")),l.a.createElement(O.a,null,l.a.createElement("h1",null," What are some of your skills? ")),l.a.createElement(O.a,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{type:"text",name:"skillsForm",placeholder:"Skills",onChange:function(t){return e.setState({sSkills:t.target.value},(function(){console.log("New skills:",e.state.sSkills)}))}})))),l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onNextClick()}},">")))}}]),t}(a.Component),Q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={sHobbies:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"Back")),l.a.createElement(O.a,null,l.a.createElement("h1",null," What are some of your hobbies and interests? ")),l.a.createElement(O.a,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{type:"text",name:"hobbiesForm",placeholder:"Hobbies & Interests",onChange:function(t){return e.setState({sHobbies:t.target.value},(function(){console.log("New hobbies:",e.state.sHobbies)}))}})))),l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onNextClick()}},">")))}}]),t}(a.Component),X=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={sBio:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"Back")),l.a.createElement(O.a,null,l.a.createElement("h1",null," Add some photos of yourself! ")),l.a.createElement(O.a,null,l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"+"),l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"+"),l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:function(){e.props.onPrevClick()}},"+")),l.a.createElement(O.a,null,l.a.createElement("h2",null," 3 required ")),l.a.createElement(O.a,null,l.a.createElement("h1",null," What are you looking for in your partnership? ")),l.a.createElement(O.a,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Group,null,l.a.createElement(U.a.Control,{type:"bio",name:"bioForm",onChange:function(t){return e.setState({sBio:t.target.value},(function(){console.log("New bio:",e.state.sBio)}))}})))),l.a.createElement(O.a,null,l.a.createElement(c.b,{to:"/"},l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:this.props.onSignUp},"Finish"))))}}]),t}(a.Component),Z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).getLinks=function(){fetch("/api/getUsers",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.users.filter((function(e){return"7"===e.id}));console.log("Found user? "),console.log(t)}))},n.state={page:0},n.handlePrevClick=n.handlePrevClick.bind(Object(p.a)(n)),n.handleNextClick=n.handleNextClick.bind(Object(p.a)(n)),n.handleSignUp=n.handleSignUp.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleNextClick",value:function(){this.setState((function(e){return{page:e.page+1}})),console.log("This is the current page state: "+this.state.page)}},{key:"handlePrevClick",value:function(){this.setState((function(e){return{page:e.page-1}})),console.log("This is the current page state: "+this.state.page)}},{key:"handleSignUp",value:function(){this.addUser("Test Name","Test Description","http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg")}},{key:"addUser",value:function(e,t,n){var a=this;console.log("adding User: "+e+" "+t+" "+n);var l={id:"7",name:e,description:t,imageURL:n};fetch("/api/addUser",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(l)}).then((function(e){return console.log("Getting response back: "),console.log(e),a.getLinks(),e})).then((function(e){return a.props.onUserSessionUpdate("temp",!0,"7"),e})).catch((function(e){console.log("Add User error: "),console.log(e)}))}},{key:"render",value:function(){return 0===this.state.page?l.a.createElement(Y,{onNextClick:this.handleNextClick,onPrevClick:this.handlePrevClick}):1===this.state.page?l.a.createElement(D,{onNextClick:this.handleNextClick,onPrevClick:this.handlePrevClick}):2===this.state.page?l.a.createElement(H,{onNextClick:this.handleNextClick,onPrevClick:this.handlePrevClick}):3===this.state.page?l.a.createElement(q,{onNextClick:this.handleNextClick,onPrevClick:this.handlePrevClick}):4===this.state.page?l.a.createElement(V,{onNextClick:this.handleNextClick}):5===this.state.page?l.a.createElement($,{onNextClick:this.handleNextClick,onPrevClick:this.handlePrevClick}):6===this.state.page?l.a.createElement(z,{onNextClick:this.handleNextClick,onPrevClick:this.handlePrevClick}):7===this.state.page?l.a.createElement(K,{onNextClick:this.handleNextClick,onPrevClick:this.handlePrevClick}):8===this.state.page?l.a.createElement(Q,{onNextClick:this.handleNextClick,onPrevClick:this.handlePrevClick}):9===this.state.page?l.a.createElement(X,{onNextClick:this.handleNextClick,onPrevClick:this.handlePrevClick,onSignUp:this.handleSignUp}):void 0}}]),t}(a.Component),ee=n(64),te=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=f,t=k,n=b;return(l.a.createElement(ee.a,{expand:"true",bg:"light",fixed:"bottom"},l.a.createElement(c.b,{to:"/"+e},l.a.createElement(ee.a.Brand,null,"Links")),l.a.createElement(c.b,{to:"/"+t},l.a.createElement(ee.a.Brand,null,"Messages")),l.a.createElement(c.b,{to:"/"+n},l.a.createElement(ee.a.Brand,null,"Profile"))))}}]),t}(a.Component),ne=(n(57),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={username:"",isAuthenticated:!1,userId:""},n.handleUserSessionUpdate=n.handleUserSessionUpdate.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=F.getUsername()||null,t=F.getAuthenticated()||!1,n=F.getId()||null;F.setUsername(e),F.setAuthenticated(t),F.setId(n),this.setState({username:e,isAuthenticated:t,userId:n})}},{key:"handleUserSessionUpdate",value:function(e,t,n){F.setUsername(e),F.setAuthenticated(t),F.setId(n),this.setState({username:e,isAuthenticated:t,userId:n})}},{key:"render",value:function(){var e=this,t=d,n=v,a=f,r=g,o=b,c=k,i=C;return l.a.createElement("div",{className:"main"},l.a.createElement(E.d,null,l.a.createElement(E.b,{exact:!0,path:"/",render:function(){return l.a.createElement(j,{isAuthenticated:e.state.isAuthenticated})}}),this.state.isAuthenticated?l.a.createElement(E.b,{exact:!0,path:"/"+t,render:function(){return l.a.createElement(j,{isAuthenticated:e.state.isAuthenticated})}}):l.a.createElement(E.b,{exact:!0,path:"/"+t,render:function(){return l.a.createElement(x,{onBackClick:e.handleBackToLaunch})}}),this.state.isAuthenticated?l.a.createElement(E.b,{exact:!0,path:"/"+n,render:function(){return l.a.createElement(j,{isAuthenticated:e.state.isAuthenticated})}}):l.a.createElement(E.b,{exact:!0,path:"/"+n,render:function(){return l.a.createElement(w,{onUserSessionUpdate:e.handleUserSessionUpdate})}}),l.a.createElement(E.b,{exact:!0,path:"/"+a,render:function(){return l.a.createElement(A,{userId:e.state.userId})}}),l.a.createElement(E.b,{exact:!0,path:"/"+r+"/:id",component:I}),l.a.createElement(E.b,{exact:!0,path:"/"+o,component:B}),l.a.createElement(E.b,{exact:!0,path:"/"+c,component:R}),l.a.createElement(E.b,{exact:!0,path:"/"+i,render:function(){return l.a.createElement(Z,{onUserSessionUpdate:e.handleUserSessionUpdate})}})),this.state.isAuthenticated&&l.a.createElement(te,{userId:this.state.userId}))}}]),t}(a.Component));var ae=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(c.a,null,l.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.7e1dfd2b.chunk.js.map