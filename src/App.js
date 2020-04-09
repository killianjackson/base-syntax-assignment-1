import React, { Component } from 'react';
import './App.css';
import './UserOutput/UserOutput.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "killianjackson",
  };

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserInput
          changed={this.changeUsernameHandler}
          username={this.state.username}
        />
      </div>
    );
  }
}

export default App;
