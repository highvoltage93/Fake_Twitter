import React, { useEffect } from 'react';
import FollowPage from './FollowPage';
import { connect } from 'react-redux';
import { get_follow_list_THUNK, unfollow_THUNK, follow_THUNK } from '../../Store/users_action';

const FollowPageContainer = (props) => {

    useEffect(() => {
        props.get_follow_list(props.match.params.profileID)
    }, [props.match.params.profileID])

    return <FollowPage {...props} />
}

let mapStateToProps = state => {
    return {
        follow_list: state.users.follow_list,
        authUser: state.auth.user
    }
}

let mapDispatchToProps = dispatch => {
    return {
        get_follow_list: (profileID) => dispatch(get_follow_list_THUNK(profileID)),
        follow: (userID) => dispatch(follow_THUNK(userID)),
        unfollow: (userID) => dispatch(unfollow_THUNK(userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowPageContainer)