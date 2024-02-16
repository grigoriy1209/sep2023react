import {apiServices} from "./apiServices";
import {urls} from "../constants";

const postService ={
    getByUserId:(userId) =>apiServices.get(urls.posts.base,{params:{userId}}),
    byId:(id)=> apiServices.get(urls.posts.byId(id))
}
export {
    postService
}