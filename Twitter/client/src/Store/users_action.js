import axios from 'axios'
const { SEARCH, GET_USERS_FOR_CONTENT, GET_USER_PROFILE, ISLOADING, FOLLOW, UNFOLLOW ,FOLLOW_DISABLE_BUTTON, GET_FOLLOW_LIST} = require("./types");

// ISLOADING
const isLoading_AC = (data) => ({ type: ISLOADING, loading: data })

// SEARCH
export const search_THUNK = (value) => dispatch => {
    axios
        .post('/users/search', { value })
        .then(res => {
            dispatch({
                type: SEARCH,
                data: res.data
            })
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

// FOLLOW

export const follow_THUNK = (userID) => dispatch => {
    dispatch({type: FOLLOW_DISABLE_BUTTON})
    axios
        .patch('/users/follow', { userID })
        .then(res => {
            dispatch({ type: FOLLOW, user: res.data })
            dispatch({type: FOLLOW_DISABLE_BUTTON})
        })
}

// UNFOLLOW
export const unfollow_THUNK = (userID) => dispatch => {
    dispatch({type: FOLLOW_DISABLE_BUTTON})
    axios
        .patch('/users/unfollow', { userID })
        .then(res => {
            dispatch({ type: UNFOLLOW, user: res.data })
            dispatch({type: FOLLOW_DISABLE_BUTTON})
        })
}

// GET_FOLLOW_LIST
const get_follow_list_AC = (list) => ({type: GET_FOLLOW_LIST, list})

export const get_follow_list_THUNK = (profileID) => dispatch => {
    axios
        .get(`/users/list/${profileID}`)
        .then(res => {
            dispatch(get_follow_list_AC(res.data))
        })
}