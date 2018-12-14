import React, { Component } from 'react';
import './App.css';
import Header from './Components/siteStructure/Header'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />

        </Router>

      </div>
    );
  }
}

export default App;
