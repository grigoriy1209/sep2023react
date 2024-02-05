import {PostsComponent} from "./posts/PostsComponent";
import {useState} from "react";

const App = () => {
    const [post, setPost] = useState(null);

     const choosePost =(obj)=>{
         setPost(obj)

     }

    return (
        <div>
           <PostsComponent choosePost={choosePost}/>
            <hr/>
            <h1>Post Component Info</h1>
            {
                post && <h2>ID:{post.id}{<br/>} UserId:{post.userId}<br/>Body:{post.body}</h2>
            }

        </div>
    );
};

export {App};