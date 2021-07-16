import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'//install react-redux
import App from './App';
import configureStore from './store/configureStore'
import { startGetPosts } from './actions/postsAction';
import { startGetUsers } from './actions/usersAction';
 
const store=configureStore() 
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())  
    
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())

const jsx= (
    <Provider store={store}>
        <App/>
    </Provider>
) 
 ReactDOM.render(jsx, document.getElementById('root'));

 