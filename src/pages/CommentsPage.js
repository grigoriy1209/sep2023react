import {Comments} from "../components/CommentsContainer/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Comments/>
            <h1>post info</h1>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};