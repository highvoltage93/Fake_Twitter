import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEnvelope, faUser, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    return (
        <nav className="nav">
            <NavLink to='/home'><FontAwesomeIcon icon={faHome} /></NavLink>
            <NavLink to='/profile'><FontAwesomeIcon icon={faUser} /></NavLink>
            <NavLink to='/users'><FontAwesomeIcon icon={faUsers} /></NavLink>
            <NavLink to='/bookmarks'><FontAwesomeIcon icon={faStar} /></NavLink>
            <NavLink to='/dialogs'><FontAwesomeIcon icon={faEnvelope} /></NavLink>
        </nav>
    );
}

export default NavBar;