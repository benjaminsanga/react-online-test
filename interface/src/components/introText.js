import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Question from './question';

class Intro extends Component {

    constructor(props) {
        super(props);
        
        let verified = false;
        // check if name and email are not present
        if (props.name !== null || props.email !== null || props.name !== '' || props.email !== '') {
            // set verified to false
            verified = true;
        }

        // set name, email states from props
        this.state = {
            name: props.name,
            email: props.email,
            isStarted: false,
            verified: verified
        };

        // bind functions
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({ isStarted: true });
    };

    render() {
        if (this.state.isStarted && this.state.verified) {
            return <Question name={this.state.name} email={this.state.email} />
        }
        return (
            <div className="intro-div">
                <p>Hello {this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</p>
                <p className="text">
                    The Testa app is an app I created to 
                    exercise my knowledge of React JS using an online test app. Primarily to show 
                    recruiters/employees my proficiency.
                </p>
                <button onClick={this.handleClick} className="start-btn">Start Test</button>
                <i>This will take you to the questions page!</i>
            </div>
        );
    }
}

export default Intro;
