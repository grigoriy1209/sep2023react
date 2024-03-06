import { useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services";
import {carsActions} from "../../store/slices/carsSlice";
import {useEffect} from "react";

const CarForm = () => {
    const {register,handleSubmit,setValue,reset} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);
    const save =async (car)=>{
    await carService.create(car)
        dispatch(carsActions.trigger())
        reset()
    }

    const update = async (car) =>{
   await carService.updateById(carForUpdate.id, car)
        dispatch(carsActions.trigger())
        dispatch(carsActions.setCarForUpdate(null))
        reset()
    }

    return (
     <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type='text' placeholder='brand' {...register('brand')}/>
            <input type='text' placeholder='price' {...register('price')}/>
            <input type='text' placeholder='year' {...register('year')}/>
         <button>{carForUpdate?'update':'save'}</button>
     </form>
    );
};

export {CarForm};