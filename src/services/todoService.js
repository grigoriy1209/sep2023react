import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const todoService ={
    getAll:() => apiService.get(urls.todos.base),
    getById:(useId)=>apiService.get(urls.todos.byId(useId))

}
export {
    todoService
}