import React from 'react';
import Tweet from './Tweet';
import { connect } from 'react-redux';
import { delete_tweet_thunk } from '../../Store/tweet_actions';

const TweetContainer = (props) => {
    return <Tweet {...props} />
}

let mapDispatchToProps = (dispatch) => {
    return {
        delete_tweet: (tweet_id) => {
            dispatch(delete_tweet_thunk(tweet_id))

        }
    }
}

export default connect(null, mapDispatchToProps)(TweetContainer)