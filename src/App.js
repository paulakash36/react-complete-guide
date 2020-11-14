import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import Radium from 'radium';

class App extends Component {
  
state =  {
  persons: [
  {name:"Akash", age:"22"},
  {name:"Kiran", age:"25"},
  {name:"sTRYKzEr", age:"23"}
  ],
  otherState : 'some other state',
  showPerson : false
}

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name:newName, age:"22"},
        {name:"Kiran", age:"25"},
        {name:"sTRYKzEr2", age:"23"}
      ]
    });
    console.log(this.state);
  }

  nameChangedhandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
    const showPersons = this.state.showPerson;
    this.setState({
      showPerson : !showPersons
    });
  }

  personDeleteHandler = (personIndex) => {
    // const person = this.state.persons.slice();
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({persons: person});
  }

  
render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      boxShadow: '0 10px 8px #000',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
        {this.state.persons.map( (person, index) => {
          return <Person
              click={() => this.personDeleteHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} 
              changed={(event) => {this.nameChangedhandler(event, person.id)}}/>
        })}
        </div>
      );
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

   const classes = []
    
   if (this.state.persons.length <=2) {
     classes.push('red');
   }
   if (this.state.persons.length <=1) {
     classes.push('bold');
   }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <p className={classes.join(' ')}>This is really Working!!!</p>
        <button style={style} onClick = {this.togglePersonHandler}>Toggle Person</button>
        {person}
      </div>
    );
  }
}

export default Radium(App);
 


