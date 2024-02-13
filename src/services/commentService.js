import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {
    getAll:()=>apiService.get(urls.comments.base),
    getById:(commentId) => apiService(urls.comments.byId(commentId)),
    getPostsById:(postId) => apiService.get(urls.comments.getPostsByCommentId(postId))
}
export {
    commentService
}