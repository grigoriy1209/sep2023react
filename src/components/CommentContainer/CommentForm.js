import {useForm} from "react-hook-form";
import {commentServices} from "../../services/commentServices";

const CommentForm = ({setComments}) => {
    const {reset,register,
        handleSubmit} = useForm();

    const save = (item)=>{
      commentServices.create(item).then(({data})=> setComments(prev => ([...prev,data])))
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>
            <button onClick={()=>reset()}>clear</button>
        </form>
    );
};

export {CommentForm};