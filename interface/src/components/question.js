import React, { Component } from 'react';
import Final from '../pages/FinalScore';

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            timer: 600000,
            questions: [],
            questionNumber: 0,
            options: [],
            questionOptions: [],
            answers: Array(10).fill(null),
            isSubmitted: false,
            score: 0
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
                options: opts,
                questionOptions: opts[0]
            });
        })
        .catch(err => console.log(err));
    }

    componentDidMount = () => {
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

    componentWillUnmount = () => {
        clearInterval(this.state.timer);
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
        
        if (this.state.answers[this.state.questionNumber - 1] === null) {
            this.deselectOptions();
        } else if (this.state.answers[this.state.questionNumber - 1] !== null) {
            // console.log(this.state.answers[this.state.questionNumber - 1])
            this.selectOption(`option_${parseInt(this.state.answers[this.state.questionNumber - 1]) + 1}`);
        }

        this.setState({
            questionNumber: this.state.questionNumber - 1,
            questionOptions: this.state.options[this.state.questionNumber - 1]
        });
    }

    handleNext = () => {
        if (this.state.questionNumber === 9) return
        
        if (this.state.answers[this.state.questionNumber + 1] === null) {
            this.deselectOptions();
        } else if (this.state.answers[this.state.questionNumber + 1] !== null) {
            this.selectOption(`option_${parseInt(this.state.answers[this.state.questionNumber + 1]) + 1}`);
        }

        this.setState({
            questionNumber: this.state.questionNumber + 1,
            questionOptions: this.state.options[this.state.questionNumber + 1]
        });
    }

    handleSubmit = async () => {
        let answers = this.state.answers;
        let score = await fetch('http://localhost:8000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(answers)
        }).then(res => res.json())
        .then(data => {
            return data.score;
        })
        .catch(err => console.log(err));

        this.setState({
            isSubmitted: true,
            score: score
        });

    }

    handleSelectOption = (e) => {
        if (! /\d/.test(e.target.value)) return
        let answers = this.state.answers.slice();
        answers[this.state.questionNumber] = parseInt(e.target.value);
        this.setState({
            answers: answers
        });
    }

    deselectOptions = () => {
        document.querySelector('#option_1').checked = false;
        document.querySelector('#option_2').checked = false;
        document.querySelector('#option_3').checked = false;
        document.querySelector('#option_4').checked = false;
    }

    selectOption = (option) => {
        // console.log(option);
        let patt = /\d/g;
        if (!patt.test(option)) return
        document.querySelector(`#${option}`).checked = true;
    }
    
    render(){
        if(this.state.isSubmitted){
            return <Final score={this.state.score} />
        } else {
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
                                <label htmlFor="option_1">{this.state.questionOptions[0]}</label>
                            </div>
                            <div className="option">
                                <input type="radio" id="option_2" name="selectedOption"
                                        value={1}
                                        onChange={this.handleSelectOption} />
                                <label htmlFor="option_2">{this.state.questionOptions[1]}</label>
                            </div>
                        </div>
                        <div className="group-two">
                            <div className="option">
                                <input type="radio" id="option_3" name="selectedOption"
                                        value={2}
                                        onChange={this.handleSelectOption}  />
                                <label htmlFor="option_1">{this.state.questionOptions[2]}</label>
                            </div>
                            <div className="option">
                                <input type="radio" id="option_4" name="selectedOption"
                                        value={3}
                                        onChange={this.handleSelectOption} />
                                <label htmlFor="option_1">{this.state.questionOptions[3]}</label>
                            </div>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button onClick={this.handlePrevious}> Previous </button>
                        <button onClick={this.handleNext}> Next </button>
                        <button onClick={this.handleSubmit}> Submit </button>
                    </div>
                </div>
            );
        }
    }
}

export default Question;
