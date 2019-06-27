import React from 'react';
import './display.css';

const Display = (props) => {
    return (
        <div className="wrapper">
        {props.friends.map((friend) => (
            <div className="frame">
                <div className="center">
                    <h2>{friend.name} | {friend.age}</h2>
                    <h3>{friend.email}</h3>
                </div>
            </div> 
        ))};
        </div>
    );
    }

export default Display;