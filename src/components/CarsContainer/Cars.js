import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carService} from "../../services";
import {carsActions} from "../../store/carsSlice";
import {Car} from "./Car";


const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carsActions.setResponse(data)))
    }, [dispatch]);
    return (
        <div>
            {
              cars&&  cars.map(car =><Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};