import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Play extends React.Component {


  handleClick() {
    fetch('transport/play');
  }

  render() {
    return (
      <button type="button" className="btn btn-default">
      <i onClick={this.handleClick} className="material-icons">play_arrow</i>
      </button>
    );
  }
}

export default Play;
