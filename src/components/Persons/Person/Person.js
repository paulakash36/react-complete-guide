import React, { Component,Fragment } from 'react';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
// import Radium from 'radium';


// const StyledDiv = styled.div`
//     width:60%;
//     margin: 16px auto;
//     border: 1px solid #bbb;
//     box-shadow: 0 2px 3px #eee;
//     padding: 16px;
//     text-align: center;

//     @media (min-width : 400px) {
//             width: 300px;
//     }
// ` ;


class Person extends Component {
    // const style = {
    //     '@media (min-width : 500px)' : {
    //         width: '450px'
    //     }
    // }
    render () {
        console.log('[Person.js] rendering...');
        return (
            // <div className="Person" style={style}>
            // <div className={classes.Person}>
            <Aux>
                <p onClick={this.props.click}>This is a {this.props.name} and is {this.props.age} years old...</p>
                <p>{this.props.children}</p>
                <input type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
             
            // </div>
            // </div>
        );
    }
    
}

export default withClass(Person, classes.Person);