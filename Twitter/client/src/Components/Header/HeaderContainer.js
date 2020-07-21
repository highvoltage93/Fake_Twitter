import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout_Thunk } from '../../Store/auth_actions';
import { search_THUNK } from '../../Store/users_action';

const HeaderContainer = (props) => {
    return <Header {...props} />
}

let mapStateToProps = (state) => {
    return{
        auth: state.auth.isAuth,
        authUserId: state.auth.authUserId,
        avatar: state.auth.avatar,
        fullName: state.auth.fullName,
        search_users_list: state.users.search_users_list
    }
}


let mapDispatchToProps = (dispatch) => {
    return{
        logout: () => {
            dispatch(logout_Thunk())
        },
        search: (value) => {
            dispatch(search_THUNK(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

