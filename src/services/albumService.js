import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const albumService = {
    getAll:()=>apiService(urls.albums.base),
    getById:(userId)=> apiService(urls.albums.byId(userId))
}
export {
    albumService
}
