import React from 'react';
import axios from 'axios';
import './form.css';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            age: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createFriend = (event) => {
        event.preventDefault();
        
        const { name, age, email } = this.state;
        const newFriend = { name, age, email };
        
        axios.post("http://localhost:5000/friends", newFriend)
            .then((response) => {
                this.props.updateFriends(response.data);
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    render() {
        const { name, age, email } = this.state

        return(
            <div className="form-style-6">
            <h1>Submit Your Information</h1>
            <form onSubmit={this.createFriend}>
                <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
                <input type="text" name="email" placeholder="Email Address" value={email} onChange={this.handleChange} />
                <input type="text" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
}

export default Form;