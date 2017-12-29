import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pause from './components/Pause';
import Play from './components/Play';
import Tune from './components/Tune';
import { ButtonToolbar } from 'react-bootstrap';

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
        <h1>Media Controls</h1>
        <div class="container">
          <ButtonToolbar>
            <Play></Play><Pause></Pause>
          </ButtonToolbar>
          <ButtonToolbar>
            <Tune station="radio1" caption="Radio 1"></Tune>
            <Tune station="radio2" caption="Radio 2"></Tune>
            <Tune station="radio4" caption="Radio 4"></Tune>
            <Tune station="radio5" caption="Radio 5"></Tune>
            <Tune station="radio6" caption="Radio 6"></Tune>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default App;
