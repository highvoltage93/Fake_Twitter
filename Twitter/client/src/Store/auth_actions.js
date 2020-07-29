import { REGISTRATION, LOAD_USER, LOGOUT, LOGIN, SETTINGS } from "./types";
import axios from 'axios'

// REGISTRATION
const registration_AC = (data) => ({ type: REGISTRATION, data })

export const registration_Thunk = (user) => {
    return dispatch => {
        axios
            .post('/auth/registration', { user })
            .then(res => {
                dispatch(registration_AC(res.data))
            })
    }
}

// LOGIN
export const loginThunk = (user) => {
    return dispatch => {
        axios
            .post('/auth/login', {user})
            .then(res => {
                dispatch(registration_AC(res.data))
            })

    }
}


//  LOAD_USER_TOKEN
const loadUserAc = (data) => ({ type: LOAD_USER, data })

export const loadThunk = () => {
    return dispatch => {
        axios
            .get('/auth/auth')
            .then(res => {
                dispatch(loadUserAc(res.data))
            })
    }
}

// LOGOUT
export const logout_Thunk = () => dispatch => {
    dispatch({ type: LOGOUT })
}

// SETTINGS
const settings_AC = (data) => ({type: SETTINGS, data})

export const settings_THUNK = (bg) => dispatch => {
    debugger
    axios
        .patch('/users/bg', {bg})
        .then(res => {
            dispatch(settings_AC(res.data))
        })
}