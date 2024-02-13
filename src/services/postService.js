import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService ={
    getAll:()=> apiService.get(urls.posts.base),
    getPostsById:(postId) => apiService.get(urls.posts.getPostsById(postId))
}
export {
    postService
}