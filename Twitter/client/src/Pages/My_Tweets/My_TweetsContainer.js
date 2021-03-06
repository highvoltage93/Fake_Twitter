import React, { useEffect } from 'react';
import My_Tweets from './My_Tweets';
import { connect } from 'react-redux';
import { addNewTweetThunk, get_tweetsThunk, get_all_tweets_follow_THUNK } from '../../Store/tweet_actions';

const My_TweetsContainer = React.memo((props) => {

    useEffect(() => {
        // props.get_tweets()
        props.get_all_tweets()
    }, [props.tweets])

    return <My_Tweets {...props} />
})

let mapStateToProps = state => {
    return {
        user: state.auth.user,
        avatar: state.auth.avatar,
        fullName: state.auth.fullName,
        tweets: state.tweets.tweets
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newTweet: (tweet) => dispatch(addNewTweetThunk(tweet)),
        get_tweets: () => dispatch(get_tweetsThunk()),
        get_all_tweets: () => dispatch(get_all_tweets_follow_THUNK())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(My_TweetsContainer)

