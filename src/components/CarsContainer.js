import {useEffect, useState} from "react";

import {carServices} from "../services/carServices";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)


    useEffect(() => {
        carServices.getAll().then(({data})=>setCars(data))
    }, [trigger]);
    const changeTrigger=()=>{
        setTrigger(prev=>!prev)
    }
    return (
        <div>
                <CarForm changeTrigger={changeTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
                 <hr/>
                <Cars cars={cars} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>
        </div>
    );
};

export {CarsContainer};