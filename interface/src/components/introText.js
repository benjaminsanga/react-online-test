import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Intro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        <Link to="/questions" />
    };

    render() {
        return (
            <div className="intro-div">
                <p>Hello {this.state.name}</p>
                <p className="text">
                    The Testa app is an app I created to 
                    exercise my knowledge of React JS using an online test app. Primarily to show 
                    recruiters/employees my proficiency.
                </p>
                <button onClick={this.handleClick} className="start-btn">
                    <Link to="/questions">Start Test</Link>
                </button>
                <i>This will take you to the questions page!</i>
            </div>
        );
    }
}

export default Intro;
