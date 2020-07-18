import React, {useEffect} from 'react';
import Registration from './Registration';
import { connect } from 'react-redux';
import { registration_Thunk } from '../../Store/actions';
import { Redirect } from 'react-router-dom';

const RegistrationContainer = (props) => {

    if(props.authRedirect){
        return <Redirect to={"/home"}/>
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
