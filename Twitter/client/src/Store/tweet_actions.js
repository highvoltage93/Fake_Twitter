import axios from 'axios'
const { GET_TWEETS, ADD_NEW_TWEET } = require("./types");

// GET_TWEETS
const get_tweetsAC = (tweets) => ({ type: GET_TWEETS, tweets })

export const get_tweetsThunk = () => dispatch => {
    axios
        .get('/tweets')
        .then(res => {
            dispatch(get_tweetsAC(res.data))
        })
}

// ADD_NEW_TWEET
const addNewTweet = (tweets) => ({ type: ADD_NEW_TWEET, tweets })

export const addNewTweetThunk = (tweet) => dispatch => {
    axios
        .post('/tweets/add', { tweet })
        .then(res => {
            dispatch(addNewTweet(res.data))
        })

}

// DELETE_TWEET
export const delete_tweet_thunk = (tweet_id) => dispatch => {
    axios
        .post('/tweets/delete', {tweet_id})
        .then()
}

export const set_pinned_tweetThunk = (tweet_id) => dispatch => {
    axios
        .post('/tweets/pinned', {tweet_id})
        .then()
}