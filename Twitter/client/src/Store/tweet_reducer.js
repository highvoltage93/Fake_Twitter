import { GET_TWEETS, ADD_NEW_TWEET } from "./types";

let INITIAL_STATE = {
    tweets: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TWEETS:
            return {
                ...state,
                tweets: [...action.tweets]
            };
        case ADD_NEW_TWEET:
            return{
                ...state,
                tweets: [action.tweets, ...state.tweets]
            }
        default:
            return state;
    }
}