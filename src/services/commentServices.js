import {apiServices} from "./apiServices";
import {urls} from "../constants/urrls";

const commentServices = {
    getAll:()=> apiServices.get(urls.comments.base),
    create:(data) => apiServices.post(urls.comments.base,data),
    getById:(id)=>apiServices(urls.comments.byId(id))
}
export {
    commentServices
}