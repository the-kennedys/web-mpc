import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Library extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'files':[]};
  }

  componentDidMount() {
    fetch('library')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({'files': responseJson})
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.files}
      </div>
    );
  }
}

export default Library;
