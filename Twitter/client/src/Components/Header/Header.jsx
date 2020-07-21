import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Redirect } from 'react-router-dom'

import './Header.scss'
import InputCircle from '../UI/Input/InputCircle';
import Button from '../UI/Button/Button';
import USER_LOGO from '../../Uttils/Pictures/user.jpg'

const Header = ({ auth, avatar, fullName, logout, search }) => {

    let searchHandler = (e) => {
        search(e.target.value)
    }

    return (
        <header>
            <div className="container">
                <div>
                    {
                        auth
                            ? <NavLink to="/" className="logo"><FontAwesomeIcon icon={faHashtag} /></NavLink>
                            : <NavLink to="/explore" className="logo"><FontAwesomeIcon icon={faHashtag} /></NavLink>
                    }

                    <InputCircle
                        onChange={searchHandler}
                        type="text"
                        placeholder="Search in Twitter"
                        name="search"
                    />
                </div>
                {
                    auth
                        ? <div className="header_info">
                            <p>{fullName}</p>
                            <img
                                src={avatar === "" ? USER_LOGO : avatar}
                                alt="" />
                            <NavLink to="/explore" onClick={() => logout()}>Logout</NavLink>
                        </div>
                        : <div>
                            <NavLink to="/login">
                                <Button color="blue">Log In</Button>
                            </NavLink>
                            <NavLink to="/registration">
                                <Button color="white">Registration</Button>
                            </NavLink>
                        </div>}
            </div>
        </header>
    );
}

export default Header;