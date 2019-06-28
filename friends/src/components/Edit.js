import React from 'react';
import './edit.css';
import axios from 'axios';

class Edit extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            age: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/friends/`)
        .then(response => {
            console.log("response", response)
        })
        .catch(err => {
            console.log("err", err);
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    editFriend = event => {
        event.preventDefault()


    }

    render() {
        const { name, age, email } = this.state

        return(
            <div className="form-style-6">
            <h1>Edit Friend Information</h1>
            <form onSubmit={this.editFriend}>
                <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
                <input type="text" name="email" placeholder="Email Address" value={email} onChange={this.handleChange} />
                <input type="text" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
}
}

export default Edit;