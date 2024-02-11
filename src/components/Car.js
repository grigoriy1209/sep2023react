import {carServices} from "../services/carServices";

const Car = ({car, setCarForUpdate,changeTrigger}) => {
    const {id,brand ,price,year} = car;

    const deleteCar= async ()=>{
        await carServices.deleteById(id)
        changeTrigger()
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};