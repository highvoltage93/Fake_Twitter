import axios from 'axios'
const { SEARCH, GET_USERS_FOR_CONTENT, GET_USER_PROFILE, ISLOADING } = require("./types");

// ISLOADING
const isLoading_AC = (data) => ({ type: ISLOADING, loading: data })

// SEARCH
const search_AC = (users) => ({ type: SEARCH, users })
export const search_THUNK = (value) => dispatch => {
    axios
        .post('/users/search', { value })
        .then(res => {
            dispatch(search_AC(res.data))
        })
}

// GET_USERS_FOR_CONTENT
const get_users_for_content_AC = (data) => ({ type: GET_USERS_FOR_CONTENT, data })
export const get_users_for_content_THUNK = () => dispatch => {
    axios
        .get('/users/get_users_content')
        .then(res => {
            dispatch(get_users_for_content_AC(res.data))
        })
}

// GET_USER_PROFILE
const get_user_profile_AC = (user) => ({ type: GET_USER_PROFILE, user })
export const get_user_profile_THUNK = (profileID) => dispatch => {
    dispatch(isLoading_AC(false))
    axios
        .get(`/users/profile/${profileID}`)
        .then(res => {
            dispatch(get_user_profile_AC(res.data))
            dispatch(isLoading_AC(true))
        })

}