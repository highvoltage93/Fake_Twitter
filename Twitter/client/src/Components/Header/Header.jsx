import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

import './Header.scss'
import InputCircle from '../UI/Input/InputCircle';
import Button from '../UI/Button/Button';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div>
                    <NavLink to="/" className="logo"><FontAwesomeIcon icon={faHashtag} /></NavLink>
                    <InputCircle
                        type="text"
                        placeholder="Search in Twitter"
                    />
                </div>
                <div>
                    <Button color="blue">Log In</Button>
                    <Button color="white">Registration</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;