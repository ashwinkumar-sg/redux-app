import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import axios from 'axios' 


function UsersShow(props){
    console.log('fucker',props)
    return (
        <div>
            <h1>Posts Written By User</h1>
            <ul>
                {props.post.map(n=>{
                  return <li><Link to={`/posts/${n.id}`}>{n.title}</Link></li>
                })}
            </ul>
            <Link to='/users'>back</Link>
         </div>
    )
}

const mapStateToProps=(state,props)=>{
  const id=props.match.params.id  
  console.log('fuck',props)
  console.log(state)
    return{
        
        post:state.posts.filter(post=>post.userId==id)
    
    }
}
export default connect(mapStateToProps)(UsersShow)