import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {Post} from "./Post";
import {postService} from "../../services/postService";

const Posts = () => {
    const {state:{postId}} = useLocation();

    const [post, setPost] = useState([]);

    useEffect(() => {

            postService.getPostsById(postId).then(({data}) => setPost(data))

    }, [postId]);
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};