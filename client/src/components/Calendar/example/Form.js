import React from 'react';
import './App.css';

const Form = props => (
  <div className="App">
    <p className="App-intro">
    <button
        onClick={props.handleEventSelect}
        type="submit"
        className="btn btn-lg btn-danger"
      >Submit Form</button>
    </p>
  </div>
);

export default Form;