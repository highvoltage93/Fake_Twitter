import React from 'react';
import './Explore_User.scss'
import {NavLink} from 'react-router-dom'


const Explore_User = ({ avatar, name, key, id }) => {
    return (
        <NavLink to={`/profile/${id}`} className="exploreUser" key={key} id={id}>
            <img src={avatar} alt="" />
            <p>{name}</p>
        </NavLink>
    );
}

export default Explore_User;