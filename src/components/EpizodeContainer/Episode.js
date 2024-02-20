import {Link} from "react-router-dom";
const Episode = ({episode}) => {
    const {id, name, episode:episodeNum} = episode

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <Link to={`/episodes/${id}/characters`}>chapter:{episodeNum}</Link>
        </div>
    );
};

export {Episode};