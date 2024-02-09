import {apiServices} from "./apiServices";
import {urls} from "../constans/urls";

const userServices ={
    getAll:()=>apiServices.get(urls.users.base),
    create:(data)=>apiServices.post(urls.users.base, data),
    getById:(id)=>apiServices(urls.users.byId(id))
}

export {
    userServices
}