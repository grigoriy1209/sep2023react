import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentService} from "../../services/commentService";
import {Post} from "./Post";

const Posts = () => {
    const {state:{postId}} = useLocation();
    const [posts, setPosts] = useState([])


    useEffect(() => {
        commentService.getPostsById(postId).then(({data})=>setPosts(data))
    }, [postId]);
    return (
        <div>
            {
                posts.map(post =><Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};