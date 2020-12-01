import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    const assignedClasses = []
    let btnClass = '';

    if (props.showPersons) {
        btnClass=classes.Red;
    }
    
   if (props.persons.length <=2) {
    assignedClasses.push(classes.red);
   }
   if (props.persons.length <=1) {
    assignedClasses.push(classes.bold);
   }
     return (    
        <div className={classes.Cockpit}>
             <h1>Welcome to React</h1>
                <br />
            <p className={assignedClasses.join(' ')}>This is really Working!!!</p>
            <button 
            className={btnClass} 
            onClick = {props.clicked}>Toggle Person</button>
        </div> );   
}

export default cockpit;