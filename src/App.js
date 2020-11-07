import React, { Component, useState } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  
state =  {
  person: [
  {name:"Akash", age:"22"},
  {name:"Kiran", age:"25"},
  {name:"sTRYKzEr", age:"23"}
  ],
  otherState : 'some other state'
}

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        {name:newName, age:"22"},
        {name:"Kiran", age:"25"},
        {name:"sTRYKzEr2", age:"23"}
      ]
    });
    console.log(this.state);
  }
  nameChangedhandler = (event) => {
    this.setState({
      person: [
        {name:"Akash", age:"22"},
        {name:event.target.value , age:"25"},
        {name:"sTRYKzEr2", age:"23"}
      ]
    });
  }
  
render() {
    const style = {
      backgroundColor: '#bbb',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      boxShadow: '0 10px 8px #000',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />

        <button style={style} onClick = {this.switchNameHandler.bind(this, 'AKA')}>Switch name</button>
        
        <Person 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}
        click = {this.switchNameHandler.bind(this, 'AK')} />

        <Person 
        name={this.state.person[1].name} 
        age={this.state.person[1].age}
        changed={this.nameChangedhandler}/>

        <Person 
        name={this.state.person[2].name} 
        age={this.state.person[2].age}
        click = {() => {this.switchNameHandler('PK')}}>My Hobby: Gaming</Person>
      </div>
 
    );
  }
}

export default App;
 


