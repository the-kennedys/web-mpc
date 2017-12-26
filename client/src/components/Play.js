import React, { Component } from 'react';

class Play extends React.Component {


  handleClick() {
    fetch('transport/play');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Play
      </button>
    );
  }
}

export default Play;
