import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Pause extends React.Component {


  handleClick() {
    fetch('transport/pause');
  }

  render() {
    return (
      <Button onClick={this.handleClick} >
      <i  class="material-icons">pause</i>
      </Button>
    );
  }
}

export default Pause;
