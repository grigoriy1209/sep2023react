import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId,id, email, body}= comment;

  const navigate = useNavigate();
    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
             <button onClick={()=>navigate(`posts`,{state:{comment:id}})}>getPost</button>
        </div>
    );
};

export {Comment};