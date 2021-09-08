import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Question extends Component {
    render(){
        return (
            <div className="main">
                <div className="name-time">
                    <span>John Doe</span>
                    <span>00:00:00</span>
                </div>
                <h3 className="timer">1/10</h3>
                <p className="question-text">
                    This is a sample question with options, pick one of the 4 options below
                    then click on next to the next question. Click on Submit to finish the test 
                    session and see your result.
                </p>
                <div className="options">
                    <div className="group-one">
                        <div className="option">
                            <input type="radio" id="option_1" />
                            <label htmlFor="option_1">Optioin 1</label>
                        </div>
                        <div className="option">
                            <input type="radio" id="option_2" />
                            <label htmlFor="option_2">Optioin 2</label>
                        </div>
                    </div>
                    <div className="group-two">
                        <div className="option">
                            <input type="radio" id="option_3" />
                            <label htmlFor="option_1">Optioin 3</label>
                        </div>
                        <div className="option">
                            <input type="radio" id="option_4" />
                            <label htmlFor="option_1">Optioin 4</label>
                        </div>
                    </div>
                </div>
                <div className="action-buttons">
                    <button>Previous</button>
                    <button>Next</button>
                    <button><Link to="/final">Submit</Link></button>
                </div>
            </div>
        );
    }
}

export default Question;
