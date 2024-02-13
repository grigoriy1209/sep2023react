

const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'
const albums= '/albums'
const comments = '/comments'

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
        getPostsByCommentId:(postId)=> `${comments}/posts`
    }
}
export {
    baseURL,
    urls
}