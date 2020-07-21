import React from 'react';
import Tweet from './Tweet';
import { connect } from 'react-redux';
import { delete_tweet_thunk, set_pinned_tweetThunk, like_THUNK } from '../../Store/tweet_actions';

const TweetContainer = (props) => {
    return <Tweet {...props} />
}

let mapStateToProps = (state) => {
    return {
        authID: state.auth.authUserId
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        delete_tweet: (tweet_id) => {
            dispatch(delete_tweet_thunk(tweet_id))

        },
        set_tweet_pinned: (tweet_id) => {
            dispatch(set_pinned_tweetThunk(tweet_id))
        },
        like: (tweetID) => {
            dispatch(like_THUNK(tweetID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetContainer)