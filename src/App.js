import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Person name="Akash" age="22"/>
        <Person name="Kiran" age="25"/>
        <Person name="sTRYKzEr" age="23"/>
      </div>
 
    );
  }
}

export default App;
