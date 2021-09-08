import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class Final extends React.Component {
    render(){
        return (
            <div className="App">
                <Header />
                <div>
                    <p>John Doe</p>
                    <h2>
                        Thank you for using Testa. Hope you enjoyed it!
                    </h2>
                    <div>
                        <span>Your score</span>
                        <h2>9/10</h2>
                    </div>
                    <h3>Congratulations!!!</h3>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Final;
