const baseURL = 'https://rickandmortyapi.com/api'

const episode = '/episode'
const character = '/character'

const urls = {
    episodes:{
        base:episode,
        byId:(id)=>`${episode}/${id}`
    },
    characters:{
        base:character,
        byId:(id)=>`${character}/${id}`
    }
}
export {
    baseURL,
    urls
}