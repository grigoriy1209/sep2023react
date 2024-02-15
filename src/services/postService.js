import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";

const postService = {
    getById:(id)=> apiServices.get(urls.posts.byId(id))
}
export {
    postService
}