import React, { Component } from 'react';

class Pause extends React.Component {


  handleClick() {
    fetch('transport/pause');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Pause
      </button>
    );
  }
}

export default Pause;
