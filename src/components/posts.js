import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
function Posts(props){
    return(
        <div>
            <h1>Listing Posts-{props.posts.length}</h1>
            <ul>
                {props.posts.map(post=>{
                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    ) 
}

const mpStateToProps=(state)=>{
    return {
        posts:state.posts,
        name:state.users.name
    }
}

export default connect(mpStateToProps)(Posts) 