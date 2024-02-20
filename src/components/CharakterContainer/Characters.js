import {useEffect, useState} from "react";
import {characterService} from "../../services";
import {useParams} from "react-router-dom";
import {Character} from "./Character";

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const{episodeId} = useParams()

    useEffect(() => {
        characterService.getByEpisodeId(episodeId).then(({data})=>setCharacters(data.results))
    }, [episodeId]);


    return (
        <div>
            {
                characters.map(character =><Character  character={character} />)
            }
        </div>
    );
};

export {Characters};