

const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'
const albums= '/albums'
const comments = '/comments'
const posts = '/posts'

const urls ={
    todos:{
        base:todos,
        byId:(userId) =>`${todos}/${userId}`
    },
    albums:{
        base: albums,
        byId:(userId) =>`${albums}/${userId}`
    },
    comments:{
        base:comments,
        byId:(postId) =>`${comments}/${postId}`,
        getPostsByCommentId:(userId)=> `${comments}/${userId}/posts`
    }
}
export {
    baseURL,
    urls
}