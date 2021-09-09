import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            timer: 600000,
            questions: [],
            questionNumber: 0,
            options: [],
            answers: {}
        };
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectOption = this.handleSelectOption.bind(this);
    }

    getQuestions() {
        fetch('http://localhost:8000/getQuestions', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            let opts = []; // populate options from dataset
            let quests = data.map((item, index) => { // populate questions from dataset
                opts.push(item.options);
                return item.question;
            });

            this.setState({ 
                questions: quests,
                options: opts
            });
        })
        .catch(err => console.log(err));
    }

    componentDidMount(){
        // get questions from node
        this.getQuestions();
        
        // set timer countdown
        setInterval(() => {
            if (this.state.timer === 0) {
                clearInterval(this.state.timer);
                return;
            } 
            this.setState({
                timer: this.state.timer - 1000,
            });
        }, 1000);
    }

    time_formatting(milli_sec) {
        let minutes = Math.floor(milli_sec / 60000);
        let seconds = (milli_sec - (minutes * 60000)) / 1000;
        minutes = minutes < 10 ? "0"+minutes : minutes;
        seconds = seconds < 10 ? "0"+seconds : seconds;
        return minutes+":"+seconds;
    }

    handlePrevious = () => {
        if (this.state.questionNumber === 0) return
        this.setState({
            questionNumber: this.state.questionNumber - 1
        });
    }

    handleNext = () => {
        if (this.state.questionNumber === 9) return
        this.setState({
            questionNumber: this.state.questionNumber + 1
        })
    }

    handleSubmit = () => {

    }

    handleSelectOption = (e) => {
        this.setState({
            answers: {...this.state.answers, questionNumberProperty: e.target.value }
        });
        console.log(this.state.answers)
    }
    
    render(){
        return (
            <div className="main">
                <div className="name-time">
                    <span>John Doe</span>
                    <span>{ this.time_formatting(this.state.timer) }</span>
                </div>
                <h3 className="timer">{`${this.state.questionNumber+1}/${this.state.questions.length}`}</h3>
                <p className="question-text">
                    { this.state.questions[this.state.questionNumber] }
                </p>
                <div className="options">
                    <div className="group-one">
                        <div className="option">
                            <input type="radio" id="option_1" name="selectedOption"
                                    value={0} 
                                    onChange={this.handleSelectOption} />
                            <label htmlFor="option_1">{this.state.options[this.state.questionNumber]}</label>
                        </div>
                        <div className="option">
                            <input type="radio" id="option_2" name="selectedOption"
                                    value={1}
                                    onChange={this.handleSelectOption} />
                            <label htmlFor="option_2">Option 2</label>
                        </div>
                    </div>
                    <div className="group-two">
                        <div className="option">
                            <input type="radio" id="option_3" name="selectedOption"
                                    value={2}
                                    onChange={this.handleSelectOption}  />
                            <label htmlFor="option_1">Option 3</label>
                        </div>
                        <div className="option">
                            <input type="radio" id="option_4" name="selectedOption"
                                    value={3}
                                    onChange={this.handleSelectOption} />
                            <label htmlFor="option_1">Option 4</label>
                        </div>
                    </div>
                </div>
                <div className="action-buttons">
                    <button onClick={this.handlePrevious}> Previous </button>
                    <button onClick={this.handleNext}> Next </button>
                    <button onClick={this.handleSubmit}><Link to="/final"> Submit </Link></button>
                </div>
            </div>
        );
    }
}

export default Question;
