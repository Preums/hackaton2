import React, { Component } from 'react';
import './App.css';
import Filters from './components/Filters'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filters />
      </div>
    );
  }
}

export default App;
