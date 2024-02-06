import {PostsComponent} from "./components/Posts/PostsComponent";
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
                post &&(
                    <div><h2>
                        ID:{post.id}{<br/>}
                        UserId:{post.userId}<br/>
                        Body:{post.body}
                    </h2></div>)
            }

        </div>
    );
};

export {App};