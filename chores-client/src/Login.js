import React, { Component } from 'react';

class Login extends Component {

  handleGroupChange = () => {
    var groupID = this.refs.groupID.value;
    this.props.onGroupInputChange(groupID);
  } 

  handlePasswordChange = () => {
    var password = this.refs.password.value;
    this.props.onPasswordInputChange(password);
  }

  render() {
    return (
      <div>
        <h1>Please input your group ID and password to see available chores</h1>
        <form onSubmit={this.props.submit}>
          Group ID: <input required placeholder="13243546" type="text" ref="groupID" onChange={this.handleGroupChange} /><br />
          Password: <input required type="password" ref="password" onChange={this.handlePasswordChange} /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;