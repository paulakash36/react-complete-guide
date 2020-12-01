import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';

import Cockpit from '../components/Cockpit/Cockpit';

// import Radium, {StyleRoot} from 'radium';



class App extends Component {
state =  {
  persons: [
  {id:'1', name:"Akash", age:"22"},
  {id:'2', name:"Kiran", age:"25"},
  {id:'3', name:"sTRYKzEr", age:"23"}
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

    let person = null;
    

    if (this.state.showPerson) {
      person = <Persons 
          persons={this.state.persons} 
          changed ={this.nameChangedhandler}
          clicked = {this.personDeleteHandler} />
    }
    
    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit 
        showPersons={this.state.showPerson}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}
        />
        {person}
      </div>

    // </StyleRoot>
    );
  }
}

export default App;
 


