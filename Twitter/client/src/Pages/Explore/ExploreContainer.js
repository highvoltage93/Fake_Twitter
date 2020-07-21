import React, { useEffect } from 'react';
import Explore from './Explore'
import { connect } from 'react-redux'
import { get_new_users_THUNK, get_last_tweets_THUNK } from '../../Store/explore_actions';
import { loginThunk } from '../../Store/auth_actions';
import { Redirect } from 'react-router-dom';

const ExploreContainer = (props) => {

    useEffect(() => {

        props.get_new_users()
        props.get_last_tweets()

    }, [])

    if (props.authRedirect) {
        return <Redirect to={"/"} />
    }
    return <Explore {...props} />
}


let mapStateToProps = state => {
    return {
        new_users: state.explore.new_users,
        last_tweets: state.explore.last_tweets,
        authRedirect: state.auth.authRedirect
    }
}

let mapDispatchToProps = dispatch => {
    return {
        get_new_users: () => {
            dispatch(get_new_users_THUNK())
        },
        login: (user) => {
            dispatch(loginThunk(user))
        },
        get_last_tweets: () => {
            dispatch(get_last_tweets_THUNK())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer)