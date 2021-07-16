import axios from 'axios'

export const startGetPosts=()=>{
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{ 
            
            const posts=response.data
             dispatch(setPosts(posts))
    })  
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response=>{
            const comments=response.data
            dispatch(setComments(comments))
        })
    } 
}
export const setPosts=(posts)=>{
    return {type:'SET_POSTS',payload:posts}
}
export const setComments=(comments)=>{
    return {type:'SET_COMMENTS',payload:comments}
}  