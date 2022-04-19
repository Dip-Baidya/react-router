import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriends] = useState({});

    const navigate = useNavigate()
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data));
    }, [])

    const handleClick = () => {
        navigate(`/friends`)
    }
    return (
        <div>
            <h3>Friend Detail {friendId}</h3>
            <h1>Name: {friend.name}</h1>
            <h2>Email: {friend.email}</h2>
            <h4>Phone: {friend.phone}</h4>
            <h5>Company Name: {friend.company?.name}</h5>

            <button onClick={handleClick}>Show all</button>
        </div>
    );
};

export default FriendDetail;