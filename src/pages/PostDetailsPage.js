import {useEffect, useState} from "react";
import {postService} from "../services";
import {useParams} from "react-router-dom";
import {PostDetails} from "../componets";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        postService.byId(id).then(({data})=>setPostDetails(data))
    }, [id]);
    return (
        <div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
        </div>
    );
};

export {PostDetailsPage};