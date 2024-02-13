import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {
    getAll:()=>apiService.get(urls.comments.base),
    getById:(id) => apiService(urls.comments.byId(id)),
    getPostsById:(commentId) => apiService.get(urls.comments.getPostsByCommentId(commentId))
}
export {
    commentService
}