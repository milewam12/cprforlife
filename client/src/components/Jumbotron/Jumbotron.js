import React, { Component } from 'react';
import './JumbotronStyle.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid" id={this.props.id}>
        <div className="container">
        <div className="shadow">
          <h1 className="display-6">{this.props.title}</h1>
          <p className="lead">{this.props.subtitle}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;