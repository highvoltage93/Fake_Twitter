import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEnvelope, faUser, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'


const NavBar = ({authID}) => {
    return (
        <nav className="nav">
            <NavLink exact to='/'><FontAwesomeIcon icon={faHome} /></NavLink>
            <NavLink to={`/profile/${authID}`}><FontAwesomeIcon icon={faUser} /></NavLink>
            <NavLink to='/users'><FontAwesomeIcon icon={faUsers} /></NavLink>
            <NavLink to='/bookmarks'><FontAwesomeIcon icon={faStar} /></NavLink>
            <NavLink to='/dialogs'><FontAwesomeIcon icon={faEnvelope} /></NavLink>
        </nav>
    );
}

let mapStateToProps = state => {
    return{
        authID: state.auth.authUserId
    }
}

export default connect(mapStateToProps, null)(NavBar)