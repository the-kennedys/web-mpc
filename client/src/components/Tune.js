import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Tune extends React.Component {
  constructor(props) {
      super(props);

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    fetch('tune/'+this.props.station);
  }

  render() {
    return (
      <button onClick={this.handleClick} type="button" className="btn btn-default">
        {this.props.caption}
      </button>
    );
  }
}

export default Tune;
