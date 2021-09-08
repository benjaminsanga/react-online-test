import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Intro extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        <Link to="/questions" />
    };

    render() {
        return (
            <div className="intro-div">
                <p className="text">
                    The Testa app is an app I (find my twitter link at the bottom) created to 
                    excercise my knowledge of React using an online test app. Primarily to show 
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
