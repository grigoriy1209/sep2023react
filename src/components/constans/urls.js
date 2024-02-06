const baseURL = 'https://api.spacexdata.com/v3'
const launches = '/launches'
const urls={
    launches:{
        base:launches,
        byId:(flight_number)=>`${launches}/${flight_number}`
    }

}

export {
    baseURL,
     urls
}