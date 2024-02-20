import {apiServices} from "./apiServices";
import {urls} from "../constants";


const episodeService = {
    getAllEpisodes:(page='1') => apiServices.get(urls.episodes.base,{params:{page}}),
    byId:(id) => apiServices.get(urls.episodes.byId(id))
}
export {
    episodeService
}