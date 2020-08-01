import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import InfoContent from './InfoContent';
import { get_users_for_content_THUNK, unfollow_THUNK, follow_THUNK } from '../../Store/users_action';

const InfoContentContainer = (props) => {

    useEffect(() => {
       props.get_users()
    }, [])

    return <InfoContent {...props} />
}

let mapStateToProps = state => {
    return {
        users_content: state.users.users_content,
        authUser: state.auth.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        get_users: () => {
            dispatch(get_users_for_content_THUNK())
        },
        follow: (userID) => dispatch(follow_THUNK(userID)),
        unfollow: (userID) => dispatch(unfollow_THUNK(userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoContentContainer)

