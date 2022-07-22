import React from 'react';
import './edit.css';
import axios from 'axios';

class Edit extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/friends/`)
        .then(response => {
            response.data.map((friend) => {
                if (friend.id == this.props.match.params.id) {
                    this.setState({
                       friends : friend
                    })
                } 
            })
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
                <input type="text" name="name" placeholder={this.state.friends.name} value={name} onChange={this.handleChange} />
                <input type="text" name="email" placeholder={this.state.friends.email} value={email} onChange={this.handleChange} />
                <input type="text" name="age" placeholder={this.state.friends.age} value={age} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
}
}

export default Edit;