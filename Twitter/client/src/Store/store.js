import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import auth_reducer from './auth_reducer'
import tweet_reducer from './tweet_reducer'

let reducers = combineReducers({
    auth: auth_reducer,
    tweets: tweet_reducer
})

const store = createStore(reducers, applyMiddleware(thunk))




export default store