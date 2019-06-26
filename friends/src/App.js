import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  render() {
    return(
      <div className="App">
        <Display />
        <Form />
      </div>
    );
  }
}

export default App;
