import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Display from './components/Display';
import Form from './components/Form';
import './App.css';
import Home from './components/Home';
import Edit from './components/Edit';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({
        friends: response.data
      })
    })
    .catch(err => {
      console.log('Error', err)
    })
  }
  
  updateFriends = newFriends => {
    this.setState({
      friends : newFriends
    })
  } 

  render() {
    const { friends } = this.state;
    console.log("friends", friends);
    return(
      <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Friends</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/display">See Friends</Link>
            <Link to="/form">Become a Friend</Link>
            <Link to="/edit/:id">Change a Friend</Link>
          </div>
        </nav>
        <div className="why">
          <Route path="/" exact render={(props) => <Home {...props} /> } />
          <Route path="/display" render={(props) => <Display {...props} friends={friends} /> } />
          <Route path="/form" render={(props) => <Form {...props} updateFriends={this.updateFriends} /> } />
          <Route path="/edit/:id" render={(props) => <Edit {...props} friends={friends} updateFriends={this.updateFriends} /> } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
