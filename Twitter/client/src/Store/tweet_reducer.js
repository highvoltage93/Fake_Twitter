import { GET_TWEETS, ADD_NEW_TWEET, IS_LIKE_SUCCES, GET_LIKES_TWEETS } from "./types";

let INITIAL_STATE = {
    tweets: [],
    is_like_succes: true,
    likes_tweets: []
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
        case IS_LIKE_SUCCES:
            return{
                ...state, is_like_succes: action.like_succes
            }
        case GET_LIKES_TWEETS:
            return{
                ...state,
                likes_tweets: [...action.tweets.user_likes]
            }
        default:
            return state;
    }
}