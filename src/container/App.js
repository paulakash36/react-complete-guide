import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
// import Radium, {StyleRoot} from 'radium';



class App extends Component {
  constructor(props) {
    super (props);
    console.log('[App.js] constructor' );
    this.state ={
      persons: [
        {id:'1', name:"Akash", age:"22"},
        {id:'2', name:"Kiran", age:"25"},
        {id:'3', name:"sTRYKzEr", age:"23"}
        ],
        otherState : 'some other state',
        showPerson : false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
    }
  };

  static getDerivedStateFromProps(props,state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;  
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextPros,nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
 
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    this.setState ((prevState, props) => {
      return {
        persons: persons,
        changeCounter : prevState.changeCounter + 1
      };
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
  
  loginHandler = () => {
    this.setState({authenticated: true});
  }
 
  
render() {

  console.log('[App.js] rendering...')
    let person = null;
    

    if (this.state.showPerson) {
      person = <Persons 
          persons={this.state.persons} 
          changed ={this.nameChangedhandler}
          clicked = {this.personDeleteHandler}
          isAuthenticated={this.state.authenticated} />
    }
    
    return (
      // <StyleRoot>
      <Aux>
        <button onClick = {() => {this.setState({showCockpit:false})}}>Remove Cockpit</button>
        {
          this.state.showCockpit ?   
          <Cockpit 
          showPersons={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
          login={this.loginHandler}
          />
          : null

        }
     
        {person}
      </Aux>

    // </StyleRoot>
    );
  }
}

export default withClass(App,classes.App);
 


