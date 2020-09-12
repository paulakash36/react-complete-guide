import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person: [
      {name:"Akash", age:"22"},
      {name:"Kiran", age:"25"},
      {name:"sTRYKzEr", age:"23"}

    ]
  }

  switchNameHandler = () => {
    console.log("BUtton was clicked...");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <button onClick = {this.switchNameHandler}>Switch name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>My Hobby: Gaming</Person>
      </div>
 
    );
  }
}

export default App;
