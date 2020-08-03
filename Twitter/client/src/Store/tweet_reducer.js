import { GET_TWEETS, ADD_NEW_TWEET, IS_LIKE_SUCCES, GET_LIKES_TWEETS, UPDATE_AFTER_LIKE, GET_ALL_TWEETS_FOLLOW } from "./types";

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
                tweets: [...action.tweets, ...state.tweets]
            };
        case GET_ALL_TWEETS_FOLLOW:
            let a = []
            action.tweets.user.forEach(el => {
                return a.push(...el.tweets)
            })
            a.push(...action.tweets.userTweets)
            return {
                ...state,
                tweets: [...a]
            }
        case ADD_NEW_TWEET:
            return {
                ...state,
                tweets: [action.tweets, ...state.tweets]
            }
        case IS_LIKE_SUCCES:
            return {
                ...state, is_like_succes: action.like_succes
            }
        case GET_LIKES_TWEETS:
            return {
                ...state,
                likes_tweets: [...action.tweets.user_likes]
            }
        case UPDATE_AFTER_LIKE:
            return {
                ...state,
                likes_tweets: state.likes_tweets.map(el => {
                    if (el._id === action.tweet._id) {
                        return {
                            ...el,
                            likes: action.tweet.likes
                        }
                    }
                    return el
                })
            }

        default:
            return state;
    }
}