import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
});

const getAllPosts=()=> {
    return axiosInstance.get('/posts')
}

export {getAllPosts}