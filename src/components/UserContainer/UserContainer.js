import {useEffect, useState} from "react";
import {userServices} from "../../services/userServices";
import {UserForm} from "./UserForm";
import {Users} from "./Users";

const UserContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userServices.getAll().then(({data})=>setUsers(data))
    }, []);
    return (
        <div>
               <UserForm setUsers={setUsers}/>
                 <hr/>
               <Users users={users}/>
        </div>
    );
};

export {UserContainer};