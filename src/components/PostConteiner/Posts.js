import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentService} from "../../services/commentService";
import {Post} from "./Post";

const Posts = () => {
    const {state:{postId}} = useLocation();

    const [post, setPost] = useState([]);

    useEffect(() => {

            commentService.getPostsById(postId).then(({data}) => setPost(data))

    }, [postId]);
    return (
        <div>
            {post && <Post key={post.id} post={post}/>}
        </div>
    );
};

export {Posts};