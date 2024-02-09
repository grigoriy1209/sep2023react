const Car = ({car, setCarForUpdate,handleDelete}) => {
    const {id,brand ,price,year} = car;
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={()=>handleDelete(car)}>delete</button>
        </div>
    );
};

export {Car};