import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, name,username,email,phone} = userDetails;
    const navigate =useNavigate();
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>phone:{phone}</div>
            <button onClick={()=>navigate('posts')}>get post</button>
        </div>
    );
};

export {UserDetails};