import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Library extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'files':[],'current':''};
    this.getList = this.getList.bind(this);
  }

  getList(location) {
    fetch('library', {
      'method': 'post',
      'body': JSON.stringify({'path':location})
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({'files': responseJson, 'current':this.state.current})
      }).catch((error) => {
        console.error(error);
      });

  }

  componentDidMount() {
    this.getList('');
  }

  render() {
    return (
      <div>
        {this.state.files.map((item, index) =>
           <p key={item}><a onClick={() => this.getList(item)}> {item} </a></p>
        )}
      </div>
    );
  }
}

export default Library;
