import React from 'react';
import './form.css';

const Form = () => {
    return (
        <div className="form-style-6">
        <h1>Submit Your Information</h1>
        <form>
        <input type="text" name="field1" placeholder="Name" />
        <input type="email" name="field2" placeholder="Email Address" />
        <input type="text" name="age" placeholder="Age" />
        <input type="submit" value="Submit" />
        </form>
        </div>
    );
}

export default Form;