import React, { Component } from 'react';
import './global.css';
import NavBar from './pages/NavBar/NavBar';

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
        <NavBar />
      </div>
    );
  }
}

export default App;
