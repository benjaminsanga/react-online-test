import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Intro from './introText';

class StartForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
        }
        this.hanldeNameChange = this.hanldeNameChange.bind(this);
        this.hanldeEmailChange = this.hanldeEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hanldeNameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    hanldeEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name, this.state.email);
        <Intro name={this.state.name} email={this.state.email} />
        this.setState({
            name: '',
            email: ''
        });
    }

    render() {
        return (
            <div>
                <p>Fill in to proceed</p>
                <form>
                    <input type="text" id="name" placeholder="Name" autoComplete="off" 
                            value={this.state.name} 
                            onChange={this.hanldeNameChange} />
                    <input type="email" id="email" placeholder="Email" autoComplete="off"
                            value={this.state.email} 
                            onChange={this.hanldeEmailChange}/>
                    <button onClick={this.handleSubmit}><Link to="/intro">Proceed</Link></button>
                </form>
            </div>
        );
    }
}

export default StartForm;