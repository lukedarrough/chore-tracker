import React, { Component } from 'react';
import Login from './Login.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      input: true,
      displayGroup: false,
      groupId: "",
      password: ""
    };

    //bind for callbacks
    this.submitForm = this.submitForm.bind(this);
    this.onGroupInputChange = this.onGroupInputChange.bind(this);
    this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
  }

  //handler for when the form is submitted
  submitForm(event) {
    event.preventDefault();

    console.log("ID: " + this.state.groupID);
    console.log("Pass: " + this.state.password);

    //make call to users endpoint
    fetch('/users')

      //turn data into JSON
      .then(function(response) {
        return response.json()
      })

      //use JSON data to set state
      .then(function(responseJson) {
        this.setState({
          users: responseJson,
          input: false,
          displayGroup: true
        });
      }.bind(this));
  }

  //handler for setting the groupID from login component
  onGroupInputChange(groupID) {
    this.setState({groupID: groupID});
  }

  //handler for setting the password from login component
  onPasswordInputChange(password) {
    this.setState({password: password});
  }

  //determines what should be displayed
  renderContents() {

    //if on the input section
    if (this.state.input === true) {
      return (<Login 
                submit={this.submitForm} 
                onGroupInputChange={this.onGroupInputChange} 
                onPasswordInputChange={this.onPasswordInputChange} 
              />);
    }

    //if user has already input their information
    else {
      var groupdata = [];

      groupdata.push( <h1 key="header">Users</h1> );
      this.state.users.map(user =>
        groupdata.push( <div key={user.id}>{user.username}</div> )
      );

      return groupdata;
    }

  }

  render() {
    return (
      <div className="App">
        {this.renderContents()}
      </div>
    );
  }
}

export default App;