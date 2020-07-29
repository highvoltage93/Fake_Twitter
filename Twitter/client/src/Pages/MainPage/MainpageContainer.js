import React, {useEffect} from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import { get_tweetsThunk } from '../../Store/tweet_actions';
import { get_user_profile_THUNK } from '../../Store/users_action';
import { modal_handler_AC } from '../../Store/settings_actions';
 
const MainpageContainer = (props) => {

    useEffect(() => {

        let profileID = props.match.params.profileID

        props.get_tweets()
        props.get_profile(profileID)
    }, [props.match.params.profileID])

    return <MainPage {...props}/>
}
 
let mapStateToProps = state => {
    return{
        user: state.auth.user,
        avatar: state.auth.avatar,
        fullName: state.auth.fullNam,
        tweets: state.tweets.tweets,
        user_profile: state.users.user_profile,
        isLoading: state.users.isLoading,
        authID: state.auth.authUserId
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        get_tweets: () => dispatch(get_tweetsThunk()),
        get_profile: (profileID) => {
            dispatch(get_user_profile_THUNK(profileID))
        },
        modal_handler:() => dispatch(modal_handler_AC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainpageContainer)

