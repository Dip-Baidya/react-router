import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
   
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink  to="/friends">Friends</NavLink>
        </div>
    );
};

export default Header;