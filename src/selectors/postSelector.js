

export  const findPost=(posts,id)=>{
    return posts.find(post=>post.id==id)
}

// export const findComment=(comments,id)=>{
//     return comments.find(comment=>comment.postId==id)
// }