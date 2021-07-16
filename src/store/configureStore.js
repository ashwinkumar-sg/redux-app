import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import postsReducer from '../reducers/postsReducer'
import usersReducer from '../reducers/usersReducer'
import commentsReducer from '../reducers/commentsReducer'  
console.log(thunk,'thunk data')
const configureStore=()=>{
    const store=createStore(combineReducers({
        posts:postsReducer,
        users:usersReducer, 
        comments:commentsReducer 
    }),applyMiddleware(thunk))
    return store
} 
export default configureStore  

