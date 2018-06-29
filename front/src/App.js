import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import KrustyMap from './containers/KrustyMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <KrustyMap />
      </div>
    );
  }
}

export default App;
