import React from 'react';
import {NavLink} from 'react-router-dom'
import Logo from '../../Uttils/Pictures/logo.jpg'
import './Login.scss'
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';

const Login = ({login}) => {

    let onSubmitForm = (e) => {
        e.preventDefault()
        let user = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        login(user)
    }

    return (
        <div className="login">
            <img src={Logo} alt="" />
            <h1>Get into Twitter</h1>
            <form onSubmit={onSubmitForm} className="explore_right_form">
                <Input
                    placeholder="Email"
                    type="email"
                    require={true}
                    auto={true}
                    name='email'
                />
                <Input
                    placeholder="Password"
                    type="password"
                    require={true}
                    max={22}
                    min={2}
                    auto={true}
                    name='password'
                />

                <Button color="blue">Log In</Button>
            </form>
            <NavLink className="login_to" to={'/registration'}>Registration</NavLink>
            
        </div>
    );
}

export default Login;