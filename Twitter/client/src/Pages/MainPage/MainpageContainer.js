import React, {useEffect} from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import { get_tweetsThunk } from '../../Store/tweet_actions';
 
const MainpageContainer = (props) => {

    useEffect(() => {
        props.get_tweets()
    }, [props.tweets])

    return <MainPage {...props}/>
}
 
let mapStateToProps = state => {
    return{
        user: state.auth.user,
        avatar: state.auth.avatar,
        fullName: state.auth.fullNam,
        tweets: state.tweets.tweets
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        get_tweets: () => dispatch(get_tweetsThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainpageContainer)

