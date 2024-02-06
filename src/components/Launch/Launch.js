
const Launch = ({launch}) => {
    const {flight_number,launch_year,links} = launch
    const { mission_patch_small }= links

    return (
        <div>
            <div>Flіght №: {flight_number}</div>
            <div>Year: {launch_year}</div>
            <img src={mission_patch_small} alt={flight_number}/>

        </div>
    );
};

export {Launch};