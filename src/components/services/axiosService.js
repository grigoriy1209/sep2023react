import axios from "axios"

let axiosService= axios.create({baseURL:'https://api.spacexdata.com/v3'});
export {axiosService}