import {apiServices} from "./apiServices";
import {urls} from "../constants";

const characterService =  {
    getByEpisodeId:(episodeId) => apiServices.get(urls.characters.base,{params:{episodeId}}),
    byId:(id) => apiServices.get(urls.characters.byId(id))
}
export {
    characterService
}