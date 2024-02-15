import {Users} from "../componets/UsersContainer/Users";
import {Outlet, useLoaderData} from "react-router-dom";

const UsersPage = () => {
    const {data} =useLoaderData()
    return (
        <div>

            <br/>
            <h1>Users</h1>
            <hr/>
            <Outlet/>
            <hr/>
            <Users users={data}/>
        </div>
    );
};

export {UsersPage};