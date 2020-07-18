import React from 'react';
import Login from './LogIn';
import { connect } from 'react-redux';
import { loginThunk } from '../../Store/actions';
import { Redirect } from 'react-router-dom';

const LoginContainer = (props) => {

    if (props.authRedirect) {
        return <Redirect to={"/home"} />
    }

    return <Login {...props} />
}

let mapStateToProps = (state) => {
    return {
        authRedirect: state.auth.authRedirect
    }
}

let mapDispatchToProps = dispatch => {
    return {
        login: (user) => {
            dispatch(loginThunk(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

