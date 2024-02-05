import {useEffect, useState} from "react";
import {getAllPosts} from "../services/post.api.services";
import {PostComponent} from "../post/PostComponent";

// smart component
const PostsComponent = ({choosePost}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts().then(value => setPosts(value.data))
    }, []);
    return (
        <div >
            {
                posts.map(value => <PostComponent choosePost={choosePost} item={value} key={value.id}/>)
            }
        </div>
    );
};

export {PostsComponent};