import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './components/home'
import Posts from './components/posts'
import Users from './components/users'
import PostsShow from './components/postsShow'
import UsersShow from './components/usersShow'
import { connect } from 'react-redux';
 

function App(props) {
  return ( 
<div> 
    <BrowserRouter>
    <h1>Redux App</h1>
    <Link to="/" >Home</Link>
    <Link to="/users">Users</Link> 
    <Link to="/posts">Posts</Link>

    <Route path="/" component={Home} exact={true}/>
    <Route path="/users" component={Users} exact={true}/>
    <Route path="/users/:id" component={UsersShow}/>
    <Route path="/posts" component={Posts} exact={true}/>
    <Route path="/posts/:id" component={PostsShow}/>
    </BrowserRouter>
    </div>
  );
}
export default connect()(App)
