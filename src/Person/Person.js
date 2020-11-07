import React from 'react';

const person = (props) => {
    return (
        
        <div>
            <p onClick={props.click}>This is a {props.name} and is {props.age} years old...</p>
            <p>{props.children}</p>
        </div>
        
    )
}

export default person;