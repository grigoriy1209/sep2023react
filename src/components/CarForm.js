import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carServices} from "../services/carServices";
const CarForm = ({changeTrigger, carForUpdate,setCarForUpdate,}) => {
    const {reset, register,handleSubmit,formState:{isValid,errors},setValue} = useForm({
        mode:'all'
    });
    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year  ,{shouldValidate:true})
        }
    }, [carForUpdate,setValue]);

    const save =async (car)=>{
       await carServices.create(car)
        changeTrigger()
        reset()
    }
    const update = async (car) =>{

          await carServices.updateById(carForUpdate.id ,car)
        changeTrigger()
            setCarForUpdate(null);
          reset()

    }



    return (
        <form onSubmit={handleSubmit(carForUpdate ? update :save)}>
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