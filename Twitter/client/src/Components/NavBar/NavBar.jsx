import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEnvelope, faUser, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    return (
        <nav className="nav">
        <NavLink to='/app/home'><FontAwesomeIcon icon={faHome} /></NavLink>
            <NavLink to='/app/profile'><FontAwesomeIcon icon={faUser} /></NavLink>
            <NavLink to='/app/users'><FontAwesomeIcon icon={faUsers} /></NavLink>
            <NavLink to='/app/bookmarks'><FontAwesomeIcon icon={faStar} /></NavLink>
            <NavLink to='/app/dialogs'><FontAwesomeIcon icon={faEnvelope} /></NavLink>
        </nav>
    );
}

export default NavBar;