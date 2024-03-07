import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../services";
import {episodesActions} from "../../store/slices/episodeSlice";
import {Episode} from "./Episode";

const Episodes = () => {
    const [query,setQuery] = useSearchParams({page:'1'});
   const {episodes} = useSelector(state =>state.episodes);
    const dispatch = useDispatch();

    const page = query.get('page');

    useEffect(() => {
        episodeService.getAll(page).then(({data})=>dispatch(episodesActions.setResponse(data)))
    }, [page,dispatch]);

    return (
        <div>
            {
                episodes.map(episode =>(<Episode key={episode.id} episode={episode}/>
                ))}
        </div>
    );
};

export {Episodes};