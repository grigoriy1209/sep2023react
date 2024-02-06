                    // dump component
const PostComponent = ({item, choosePost}) => {
    return (
        <div>
            <h2>
            {item.id} - {item.title}
            </h2>
            <button onClick={()=>{
                choosePost(item)
            }}>I N  F O</button>
        </div>
    );
};

export {PostComponent};