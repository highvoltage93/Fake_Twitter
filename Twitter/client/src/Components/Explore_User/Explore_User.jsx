import React from 'react';
import './Explore_User.scss'

const Explore_User = ({ avatar, name, key, id }) => {
    return (
        <div className="exploreUser" key={key} id={id}>
            <img src={avatar} alt="" />
            <p>{name}</p>
        </div>
    );
}

export default Explore_User;