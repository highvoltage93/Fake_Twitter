import axios from 'axios'
const { GET_TWEETS, ADD_NEW_TWEET, IS_LIKE_SUCCES, GET_LIKES_TWEETS } = require("./types");

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
        .post('/tweets/delete', { tweet_id })
        .then()
}

export const set_pinned_tweetThunk = (tweet_id) => dispatch => {
    axios
        .post('/tweets/pinned', { tweet_id })
        .then()
}


// IS_LIKE_SUCCES
const is_like_succes_AC = (bol) => ({ type: IS_LIKE_SUCCES, like_succes: bol })

// LIKE
export const like_THUNK = (tweetID) => dispatch => {
    dispatch(is_like_succes_AC(false))
    axios
        .post('/tweets/like', { tweetID })
        .then(res => {
            dispatch(is_like_succes_AC(true))
        })
}
// DISLIKE
export const dislike_THUNK = (tweetID) => dispatch => {
    axios
        .post('/tweets/dislike', { tweetID })
        .then(res => console.log(res.data))
}

// GET_LIKES_TWEETS
const get_likes_tweets_AC = (tweets) => ({ type: GET_LIKES_TWEETS, tweets })

export const get_likes_tweets_Thun = (userID) => dispatch => {
    axios
        .post(`/tweets/likes_tweets`, { userID })
        .then(res => {
            dispatch(get_likes_tweets_AC(res.data))
        })
}
