import React, { Component,Fragment } from 'react';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

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
    constructor (props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render () {
        console.log('[Person.js] rendering...');
        return (
            // <div className="Person" style={style}>
            // <div className={classes.Person}>
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p> }
                </AuthContext.Consumer>
                
                <p onClick={this.props.click}>This is a {this.props.name} and is {this.props.age} years old...</p>
                <p>{this.props.children}</p>
                <input type="text" 
                // ref = {(inputEl) => {this.inputElement = inputEl}}
                ref = {this.inputElementRef}
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
             
            // </div>
            // </div>
        );
    }
    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);