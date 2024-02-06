import axios from "axios";
import {baseURL} from "../constants/url";

const axiosInstance=axios.create({baseURL})



export {
    axiosInstance
}
