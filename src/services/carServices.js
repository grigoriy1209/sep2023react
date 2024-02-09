import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";


const carServices = {
    getAll:() => apiServices.get(urls.cars.base),
    create:(data) => apiServices.post(urls.cars.base,data),
    updateById:(id, data)=>apiServices.put(urls.cars.byId(id),data),
    deleteById:(id)=> apiServices.delete(urls.cars.byId(id))

}
export {
    carServices
}