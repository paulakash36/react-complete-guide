import React from 'react';
// import './Person.css';
// import Radium from 'radium';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width:60%;
    margin: 16px auto;
    border: 1px solid #bbb;
    box-shadow: 0 2px 3px #eee;
    padding: 16px;
    text-align: center;

    @media (min-width : 400px) {
            width: 300px;
    }
` ;


const person = (props) => {
    // const style = {
    //     '@media (min-width : 500px)' : {
    //         width: '450px'
    //     }
    // }
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>This is a {props.name} and is {props.age} years old...</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </StyledDiv>
        // </div>
    )
}

export default person;