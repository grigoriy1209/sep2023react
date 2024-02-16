import {apiServices} from "./apiServices";
import {urls} from "../constants";
const userService = {
    getAll: () => apiServices.get(urls.users.base),
    ById: (id) => apiServices.get(urls.users.byId(id))
}
export {
    userService
}