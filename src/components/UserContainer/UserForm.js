import {useForm} from "react-hook-form";
import {userServices} from "../../services/userServices";

const UserForm = ({setUsers}) => {
    const{reset,register,
        handleSubmit}= useForm()

    const save=(item)=>{
        userServices.create(item).then(({data})=>setUsers(prev =>[...prev, data]))

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'street'} {...register('address.street')}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};