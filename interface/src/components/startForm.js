import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StartForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
        }
        this.hanldeNameChange = this.hanldeNameChange.bind(this);
        this.hanldeEmailChange = this.hanldeEmailChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
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

    // handleClick = (e) => {
    //     e.preventDefault();
    // }

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
                    <button><Link to="/intro">Proceed</Link></button>
                </form>
            </div>
        );
    }
}

export default StartForm;