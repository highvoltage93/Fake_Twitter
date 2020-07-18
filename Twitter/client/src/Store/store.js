import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import auth_reducer from './auth_reducer'

let reducers = combineReducers({
    auth: auth_reducer
})

const store = createStore(reducers, applyMiddleware(thunk))




export default store