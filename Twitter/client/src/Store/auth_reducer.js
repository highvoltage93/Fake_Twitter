import { REGISTRATION, LOAD_USER, LOGOUT } from "./types"
import User from '../Uttils/Pictures/user.jpg'

let INITIAL_STATE = {
    isAuth: false,
    authUserId: null,
    avatar: User,
    email: '',
    fullName: '',
    user: null,
    token: localStorage.getItem('token'),
    authRedirect: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTRATION:
            localStorage.setItem('token', action.data.token)
            return {
                ...state,
                isAuth: true,
                user: action.data.user,
                avatar: action.data.user.avatar === "" ? User : action.data.user.avatar,
                email: action.data.user.email,
                fullName: action.data.user.fullName,
                authUserId: action.data.user._id,
                authRedirect: true
            }
        case LOAD_USER:
            return {
                ...state,
                isAuth: true,
                user: action.data,
                avatar: action.data.avatar === ""? User : action.data.avatar,
                email: action.data.email,
                fullName: action.data.fullName,
                authUserId: action.data._id
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuth: false
            }
        default:
            return state
    }
}