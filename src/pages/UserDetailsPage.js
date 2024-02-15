import { useLoaderData, useLocation, useParams} from "react-router-dom";
import {useState} from "react";

import {UserDetails} from "../componets/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)
    const {id}= useParams()
    const {state}= useLocation()
    const {data}= useLoaderData()
    return (
        <div>
            <UserDetails userDetails={data}/>
        </div>
    );
};
export {UserDetailsPage};