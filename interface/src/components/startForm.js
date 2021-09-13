import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Intro from './introText';

class StartForm extends Component {
    constructor(props){
        super(props);

        // initialize states
        this.state = {
            name: "",
            email: "",
            isRegistered: ""
        }

        // bind functions
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
        
        let valid = false;

        if(this.state.name !== "" && this.state.email !== "" ) {
            valid = true;
        } else {
            // set borders to red if fields are empty
            document.getElementById('name').style.borderColor = "red";
            document.getElementById('email').style.borderColor = "red";
        }
        
        // change state to go to the next page
        this.setState({
            isRegistered: valid
        });
    }

    render() {
        if (this.state.isRegistered){
            return <Intro name={this.state.name} email={this.state.email} />
        } else {
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
                        <button onClick={this.handleSubmit}>Proceed</button>
                    </form>
                </div>
            );
        }
    }
}

export default StartForm;