import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Play extends React.Component {


  handleClick() {
    fetch('transport/play');
  }

  render() {
    return (
      <button type="button" class="btn btn-default">
      <i onClick={this.handleClick} class="material-icons">play_arrow</i>
      </button>
    );
  }
}

export default Play;
