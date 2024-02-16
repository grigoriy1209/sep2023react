import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {UserDetails} from "../componets";
import {userService} from "../services";

const UserDetailsPage = () => {
    const {id}= useParams()
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        userService.ById(id).then(({data})=>setUserDetails(id))
    }, [id]);
    return (
        <div>
            {
               userDetails &&  <UserDetails userDetails={userDetails}/>
            }
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};