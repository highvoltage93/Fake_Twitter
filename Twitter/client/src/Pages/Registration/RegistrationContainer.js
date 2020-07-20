import React, {useEffect} from 'react';
import Registration from './Registration';
import { connect } from 'react-redux';
import { registration_Thunk } from '../../Store/auth_actions';
import { Redirect } from 'react-router-dom';

const RegistrationContainer = (props) => {

    if(props.authRedirect){
        return <Redirect to={"/"}/>
    }

    return (
        <Registration {...props} />);
}

let mapStateToProps = (state) => {
    return {
        authRedirect: state.auth.authRedirect
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        registration: (user) => {
            dispatch(registration_Thunk(user))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)
