import React, { Component } from 'react';
import {Switch} from 'react-router'
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar.js';
import Form from './Form.js';

class App extends Component {
  state = {eventSelected: false};

  handleEventSelect = event => {
    event.preventDefault();
    this.setState(
      {eventSelected: true}
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        {this.state.eventSelected ? (
          <Form />
        ) : (
          <Calendar 
            handleEventSelect={this.handleEventSelect}
          />
        )}
      </div>
    );
  }
}

export default App;
