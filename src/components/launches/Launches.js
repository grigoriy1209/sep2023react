import {Launch} from "../launch/Launch";
import {useEffect, useState} from "react";

import {axiosService} from "../services/axiosService";

const Launches = () => {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
       axiosService('/launches')
            .then(({data}) => {const filtered = data.filter(value => value.launch_year !=='2020');
                setLaunches(filtered)})
    }, []);


    return (
        <div>

            {launches.map(launch => (
                <Launch key={launch.flight_number} launch={launch} />
            ))}


        </div>
    );
};

export {Launches};