import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carService} from "../../services";
import {carsActions} from "../../store/slices/carsSlice";
import {Car} from "./Car";


const Cars = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carsActions.setAllCars(data)))
    }, [dispatch,trigger]);
    return (
        <div>
            {
              cars.map(car =><Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};