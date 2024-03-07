import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";



import {Episode} from "./Episode";
import {episodesActions} from "../../store";



const Episodes = () => {
    const [query,setQuery] = useSearchParams({page:'1'});
    const {episodes} = useSelector(state =>state.episodes);
    const dispatch = useDispatch();
    const page = query.get('page');

    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [page])
    return (
        <div>
            {
                episodes.map(episode =><Episode key={episode.id} episode={episode}/>)
            }
        </div>
    );
};

export {Episodes};