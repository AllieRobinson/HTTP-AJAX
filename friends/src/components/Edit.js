import React from 'react';
import './edit.css';

class Edit extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            age: ''
        }
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