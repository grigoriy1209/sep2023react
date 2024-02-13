import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentService} from "../../services/commentService";
import {Post} from "./Post";

const Posts = () => {
    const {state:{commentId}} = useLocation();

    const [posts, setPosts] = useState([])

    useEffect(() => {

            commentService.getPostsById(commentId).then(({data}) => setPosts(data))

    }, [commentId]);
    return (
        <div>
            {
                posts.map(post =><Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};