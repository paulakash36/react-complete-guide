import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  
state =  {
  person: [
  {name:"Akash", age:"22"},
  {name:"Kiran", age:"25"},
  {name:"sTRYKzEr", age:"23"}
  ],
  otherState : 'some other state',
  showPerson : false
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
        {id: "1", name:"Akash", age:"22"},
        {id: "2",name:event.target.value , age:"25"},
        {id: "3",name:"sTRYKzEr2", age:"23"}
      ]
    });
  }

  togglePersonHandler = () => {
    const showPersons = this.state.showPerson;
    this.setState({
      showPerson : !showPersons
    });
  }

  personDeleteHandler = (personIndex) => {
    // const persons = this.state.person.slice();
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person: persons});
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

    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
        {this.state.person.map( (person, index) => {
          return <Person
              click={() => this.personDeleteHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} />
        })}
        </div>
      );
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <button style={style} onClick = {this.togglePersonHandler}>Toggle Person</button>
        {person}
      </div>
    );
  }
}

export default App;
 


