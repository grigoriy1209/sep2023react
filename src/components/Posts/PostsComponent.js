import {useEffect, useState} from "react";
import {axiosInstance} from "../../services/post.api.services";
import {PostComponent} from "../Post/PostComponent";
import {urls} from "../../constants/url";

// smart component
const PostsComponent = ({choosePost}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{ axiosInstance(urls.posts.base).then(value => setPosts(value.data))
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