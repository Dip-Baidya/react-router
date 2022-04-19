import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, email, address } = props.friend;
    const friendStyle = {
        border: '1px solid goldenrod',
        padding: '10px',
        borderRadius: '10px',
        margin: '50px',
        float: 'left',
        width: '450px',
    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name} {id}</h1>
            <h3>Email: {email}</h3>
            <h4>Address: {address.street}</h4>
            <Link to={`/friends/${id}`}>Visit Me</Link>
        </div>
    );
};

export default Friend;