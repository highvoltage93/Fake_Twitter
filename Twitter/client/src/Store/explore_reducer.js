import { GET_LAST_TWEETS, GET_NEW_USER, GET_MOST_POPULARITY } from "./types"

let INITIAL_STATE = {
    last_tweets: [],
    new_users: [],
    most_popularity: []
}
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LAST_TWEETS:
            return {
                ...state,
                last_tweets: [...action.data]
            }
        case GET_NEW_USER:
            return{
                ...state,
                new_users: [...action.data]
            }
        case GET_MOST_POPULARITY:
            return{
                ...state,
                most_popularity: [action.data]
            }
        default:
            return state
    }
}