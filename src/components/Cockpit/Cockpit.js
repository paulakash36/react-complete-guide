import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    // implement componentDidMount and componentDidUpdate lifecycles for functional components. 
    const toggleBtnRef = useRef(null);
    
    
    useEffect(() => {
        console.log("[Cockpit.js] useEffect...");
        // HTTP request....
        // setTimeout(() => {
        //     alert("An alert message");
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] Cleanup Work in useEffect');
        };
    }, []); //pass an empty array if the useEffect is need to be used only when the app renders
                        //we can pass more than one variable in the array, if we want to check for multiple state change. 

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect...");
        return () => {
            console.log('[Cockpit.js]  Cleanup Work in 2nd useEffect');
        };
    });
    // useEffect();
    
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
                ref={toggleBtnRef} 
                className={btnClass} 
                onClick = {props.clicked}>Toggle Person
            </button>
            <button onClick={props.login}>Log in</button>
        </div> );   
}

export default React.memo(cockpit);