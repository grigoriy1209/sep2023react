import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";

const userService = {
    getAll:()=>apiServices(urls.users.base),
    getById:(id) => apiServices(urls.users.byId(id))
}
export{
    userService
}