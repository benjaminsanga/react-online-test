import React from 'react';
// import Header from '../components/header';
// import Footer from '../components/footer';

class Final extends React.Component {
    render(){
        return (
            <div>
                <p>John Doe</p>
                <h2>
                    Thank you for using Testa. Hope you enjoyed it!
                </h2>
                <div>
                    <span>Your score</span>
                    <h2>{this.props.score}/10</h2>
                </div>
                <h3>
                    {this.props.score >= 8 && `High Score!!!` }
                    {this.props.score >= 5 && this.props.score < 8 && `Mid Score!!` }
                    {this.props.score < 5 && `You can do better!` }
                </h3>
            </div>
        );
    }
}

export default Final;
