import {apiServices} from "./apiServices";
import {urls} from "../constants";
const commentServices ={
    getByPostId:(postId)=> apiServices.get(urls.comments.base,{params:{postId}})
}
export {
    commentServices
}