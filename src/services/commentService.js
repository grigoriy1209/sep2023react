import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {
    getAll:()=>apiService.get(urls.comments.base),
    getById:(id) => apiService(urls.comments.byId(id)),
    getPostsById:(postId) => apiService.get(urls.posts.getPostsById(postId))
}
export {
    commentService
}