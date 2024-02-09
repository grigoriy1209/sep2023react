import {useEffect, useState} from "react";
import {commentServices} from "../../services/commentServices";
import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";


const CommentContainer = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentServices.getAll().then(({data})=> setComments(data))
    }, []);
    return (
        <div>
           <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentContainer};