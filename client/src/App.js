import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pause from './components/Pause';
import Play from './components/Play';

class App extends Component {
  state = {users:[]};

  async onComponentLoaded() {
      let response = await fetch('users');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Play></Play><Pause></Pause>
      </div>
    );
  }
}

export default App;
