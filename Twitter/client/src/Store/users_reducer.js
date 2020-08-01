import { SEARCH, GET_USERS_FOR_CONTENT, GET_USER_PROFILE, ISLOADING,  FOLLOW_DISABLE_BUTTON, GET_FOLLOW_LIST, SET_TWEET_PINNED } from "./types";

const INITIAL_STATE = {
    // search_users_list: [],
    users_content: [],
    user_profile: null,
    isLoading: true,
    search_users: [],
    follow_disable: false,
    follow_list: {
        followers: [],
        following: []
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case SEARCH:
        //     return { 
        //         ...state,
        //         search_users_list: [action.data]
        //     }
        case GET_USERS_FOR_CONTENT:
            return {
                ...state, users_content: [...action.data]
            }
        case GET_USER_PROFILE:
            return {
                ...state, user_profile: action.user
            }
        case ISLOADING:
            return {
                ...state, isLoading: action.loading
            }
        case SEARCH:
            return {
                ...state,
                search_users: [...action.data]
            }
        case FOLLOW_DISABLE_BUTTON:
            return{
                ...state,
                follow_disable: !state.follow_disable
            }
        case GET_FOLLOW_LIST:
            return{
                ...state,
                follow_list:{
                    followers: [...action.list.followers],
                    following: [...action.list.following]
                }
            }
        case SET_TWEET_PINNED:
            debugger
            return{
                ...state,
                // user_profile: state.user_profile.tweets.map(el => {
                //     if(el._id === action.pinned._id){
                //        return{
                //         ...el,
                //         pinned: action.pinned.pinned
                //        } 
                //     }
                //     return el
                // })
            }
        default:
            return state
    }
}