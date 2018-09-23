import React, { Component } from 'react';
import './global.css';
import Home from './Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
