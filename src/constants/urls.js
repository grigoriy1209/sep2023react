const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'
const comments= '/comments'

const urls= {
    users:{
        base:users,
        byId:(id)=> `${users}/${id}`
    },
    posts:{
      getPostsById:(id)=>`/posts/${id}`
    },
    comments:{
        getCommentsById:(postId)=>`/comments/${postId}`
    }
}
export {
    baseURL,
    urls
}