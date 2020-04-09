import React, { Component } from 'react';
import './App.css';

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
        <UserInput changed={this.changeUsernameHandler} username={this.state.username}/>
      </div>
    );
  }
}

class UserInput extends Component {
  render() {
    const style = {
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
    };
    
    return (
      <div className="UserInput">
        <input type="text" style={style} onChange={this.props.changed} value={this.props.username}/>
      </div>
    );
  }
}

class UserOutput extends Component {
  render() {
    return (
      <div className="UserOutput">
        <p>My username is {this.props.username}</p>
        <p>This is a placeholder paragraph that can say anything I want it to!!!</p>
      </div>
    );
  }
}

export default App;
