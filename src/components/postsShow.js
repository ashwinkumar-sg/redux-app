import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {findPost} from '../selectors/postSelector'
// import {findComment} from '../selectors/postSelector'

function PostsShow(props){
    return (
        <div>
            {props.post?(
            <div>
            <h1>User Name:</h1>
            <h3>Title:{props.post.title}</h3>
            <h2>Body</h2>
            <p>{props.post.body}</p>
            <h2>Comments</h2>
            <ul>
                {props.comment.map(n=>{
                    return <li key={n.id}>{n.body}</li>
                })}
            </ul>
            <Link to={`/users/${props.user}`}>More posts about</Link> 
            </div>
            ):(
                <p>Loading..</p>
            )}
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        user:state.users.find(user=>user.id==id),
        post:findPost(state.posts,id),
        comment:state.comments.filter(comment=>comment.postId===Number(id))
    }
}
export default connect(mapStateToProps)(PostsShow)