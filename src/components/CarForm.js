import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carServices} from "../services/carServices";
const CarForm = ({setTrigger, carForUpdate,setCarForUpdate,setHandleDelete}) => {
    const {reset, register,handleSubmit,formState:{isValid,errors},setValue} = useForm({
        mode:'all'
    });
    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year  ,{shouldValidate:true})
        }
    }, [carForUpdate]);

    const save =async (car)=>{
       await carServices.create(car)
        setTrigger(prev =>!prev)
        reset()
    }
    const update = async (car) =>{
        if (carForUpdate && carForUpdate.id && car){
          await carServices.updateById(carForUpdate.id ,car)
            setCarForUpdate(null);

            setValue('brand', car.brand, { shouldValidate: true });
            setValue('price', car.price, { shouldValidate: true });
            setValue('year', car.year, { shouldValidate: true });
        }
        else {
            await carServices.create(car)
        }
    }

    const deleteCar = async (car)=>{
        if (carForUpdate && carForUpdate.id){
            await carServices.deleteById(carForUpdate.id)
            setCarForUpdate(null)

            setValue('brand', car.brand, { shouldValidate: true });
            setValue('price', car.price, { shouldValidate: true });
            setValue('year', car.year, { shouldValidate: true });
        }
    }
    const handleSubmitForm = async (car)=>{
        await update(car)
        await save(car)
        await deleteCar(car)

    }
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <input type="text" placeholder={"brand"} {...register('brand',{
                pattern: {
                    value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message:'min 1 max 2 character'
                }
            })}/>
            <input type="text" placeholder={"price"} {...register('price',{
                valueAsNumber:true,
                min:{value:0, message:'min 0'},
                max: {value:1_000_000, message:'max 1 000 000'}
            })}/>
            <input type="text" placeholder={"year"} {...register('year',{
                valueAsNumber:true,
                min: {value:1990, message:'min 1990'},
                max: {value:new Date().getFullYear(), message:'max current year'}
            })}/>
            <button disabled={!isValid}>save</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </form>
    );
};

export {CarForm};