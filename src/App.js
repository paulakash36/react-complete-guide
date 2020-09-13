import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = () => {
  
  const [personState, setPersonState] = useState({
    person: [
      {name:"Akash", age:"22"},
      {name:"Kiran", age:"25"},
      {name:"sTRYKzEr", age:"23"}
    ],
  } );

  const [otherState, setOtherState] = useState('some other value');

  console.log(personState,otherState);

  const switchNameHandler = () => {
    setPersonState({
      person: [
        {name:"AkashPaul", age:"22"},
        {name:"Kiran", age:"25"},
        {name:"sTRYKzEr2", age:"23"}
      ]
    });
  }

  

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <button onClick = {switchNameHandler}>Switch name</button>
        <Person name={personState.person[0].name} age={personState.person[0].age}/>
        <Person name={personState.person[1].name} age={personState.person[1].age}/>
        <Person name={personState.person[2].name} age={personState.person[2].age}>My Hobby: Gaming</Person>
      </div>
 
    );
  }


export default app;
 


