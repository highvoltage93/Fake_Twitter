import { SEARCH, GET_USERS_FOR_CONTENT, GET_USER_PROFILE, ISLOADING } from "./types";

const INITIAL_STATE = {
    search_users_list: [],
    users_content: [],
    user_profile: null,
    isLoading: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH:
            return { 
                ...state,
                search_users_list: [action.data]
            }
        case GET_USERS_FOR_CONTENT:
            return{
                ...state, users_content: [...action.data]
            }
        case GET_USER_PROFILE:
            return{
                ...state,user_profile: action.user
            }
        case ISLOADING:
            return{
                ...state, isLoading: action.loading
            }
        default:
            return state
    }
}