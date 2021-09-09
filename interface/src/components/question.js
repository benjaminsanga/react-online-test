import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            timer: {
                hours: 0,
                minutes: 9,
                seconds: 59
            },
            questions: [],
            questionNumber: 0,
            options: [],
            answers: []
        };
    }

    componentDidMount(){
        setInterval(() => {
            let seconds = this.state.timer.seconds;
            this.setState({
                timer: {...this.state.timer, seconds: --seconds},
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.state.timer.seconds);
    }
    
    render(){
        return (
            <div className="main">
                <div className="name-time">
                    <span>John Doe</span>
                    <span>{`${this.state.timer.hours}:${this.state.timer.minutes}:${this.state.timer.seconds}`}</span>
                </div>
                <h3 className="timer">{`${this.state.questionNumber}/${this.state.questions.length}`}</h3>
                <p className="question-text">
                    This is a sample question with options, pick one of the 4 options below
                    then click on next to the next question. Click on Submit to finish the test 
                    session and see your result.
                </p>
                <div className="options">
                    <div className="group-one">
                        <div className="option">
                            <input type="radio" id="option_1" name="selectedOption" />
                            <label htmlFor="option_1">Option 1</label>
                        </div>
                        <div className="option">
                            <input type="radio" id="option_2" name="selectedOption" />
                            <label htmlFor="option_2">Option 2</label>
                        </div>
                    </div>
                    <div className="group-two">
                        <div className="option">
                            <input type="radio" id="option_3" name="selectedOption" />
                            <label htmlFor="option_1">Option 3</label>
                        </div>
                        <div className="option">
                            <input type="radio" id="option_4" name="selectedOption" />
                            <label htmlFor="option_1">Option 4</label>
                        </div>
                    </div>
                </div>
                <div className="action-buttons">
                    <button> Previous </button>
                    <button> Next </button>
                    <button><Link to="/final"> Submit </Link></button>
                </div>
            </div>
        );
    }
}

export default Question;
