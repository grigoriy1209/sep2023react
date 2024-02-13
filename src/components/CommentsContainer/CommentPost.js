
import {Comments} from "./Comments";
import {Outlet} from "react-router-dom";

const CommentPost = () => {
    return (
        <div>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentPost};