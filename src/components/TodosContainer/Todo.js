const Todo = ({todo}) => {
    const {userId, id, title}= todo;
    return (
        <div>

             <div>userId:{userId}</div>
             <div>id:{id}</div>
             <div>title:{title}</div>

        </div>
    );
};

export {Todo};