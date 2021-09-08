import React from 'react';
import './css/Start.css';

class Start extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Testa</h1>
          <p>
            Test your knowledge. This is created to simulate online test.
          </p>
        </header>
        <div>
          <p>Fill in to proceed</p>
          <form>
            <input type="text" id="name" placeholder="Name" autocomplete="off" />
            <input type="email" id="email" placeholder="Email" autocomplete="off" />
            <button>Proceed</button>
          </form>
        </div>
      </div>
    );
  };
}

export default Start;
