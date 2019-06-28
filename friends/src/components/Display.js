import React from 'react';
import { Link } from 'react-router-dom';
import './display.css';

const Display = (props) => {
    return (
        <div className="wrapper">
        {props.friends.map((friend) => (
            <Link to={`/edit/${friend.id}`} className="frame" key={friend.id}>
                <div className="center">
                    <h2>{friend.name} | {friend.age}</h2>
                    <h3>{friend.email}</h3>
                </div>
            </Link> 
        ))}
        </div>
    );
    }

export default Display;