import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout_Thunk } from '../../Store/actions';

const HeaderContainer = (props) => {
    return <Header {...props} />
}

let mapStateToProps = (state) => {
    return{
        auth: state.auth.isAuth,
        avatar: state.auth.avatar,
        fullName: state.auth.fullName
    }
}


let mapDispatcjToProps = (dispatch) => {
    return{
        logout: () => {
            dispatch(logout_Thunk())
        }
    }
}

export default connect(mapStateToProps, mapDispatcjToProps)(HeaderContainer)

