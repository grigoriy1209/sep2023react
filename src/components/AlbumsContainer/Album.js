const Album = ({album}) => {
    const {userId, id,title} = album
    return (
        <div>
            <div>userid: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Album};