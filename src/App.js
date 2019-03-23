import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="box box-1">
          <div className='left-box'>left</div>
          <div className='right-box'>right</div>
        </div>
        <div class="box box-2">box 2
        </div>
        <div class="box box-3">box 3</div>
      </div>
    );
  }
}

export default App;
