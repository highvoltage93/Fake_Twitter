import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import auth_reducer from './auth_reducer'
import tweet_reducer from './tweet_reducer'
import explore_reducer from './explore_reducer'
import users_reducer from './users_reducer'

let reducers = combineReducers({
    auth: auth_reducer,
    tweets: tweet_reducer,
    explore: explore_reducer,
    users: users_reducer
})

const store = createStore(reducers, applyMiddleware(thunk))




export default store