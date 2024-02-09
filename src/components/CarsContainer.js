import {useEffect, useState} from "react";

import {carServices} from "../services/carServices";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)
    const [handleDelete, setHandleDelete] = useState(null)

    useEffect(() => {
        carServices.getAll().then(({data})=>setCars(data))
    }, [trigger]);
    return (
        <div>
                <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}
                         handleDelete={handleDelete} setHandleDelete={setHandleDelete}/>
                 <hr/>
                <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};