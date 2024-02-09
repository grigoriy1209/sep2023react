import axios from "axios";

import {baseURL} from "../constants/urrls";

const apiServices = axios.create({baseURL})

export {
    apiServices
}