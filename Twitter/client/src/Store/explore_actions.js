import axios from 'axios'
import { GET_NEW_USER, GET_LAST_TWEETS } from './types'

// GET_NEW_USERS
const get_new_users_AC = (data) => ({type: GET_NEW_USER, data})

export const get_new_users_THUNK = () => dispatch => {
    axios
        .get('/explore/newUsers')
        .then(res => {
            dispatch(get_new_users_AC(res.data))
        })
}

// GET_LAST_TWEETS
const get_last_tweets_AC = (data) => ({type: GET_LAST_TWEETS, data})

export const get_last_tweets_THUNK = () => dispatch => {
    axios
        .get('/explore/lastTweets')
        .then(res => {
            dispatch(get_last_tweets_AC(res.data))
        })
}