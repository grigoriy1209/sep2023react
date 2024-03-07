import { Episodes} from "../components";
import {EpisodePaginator} from "../components/EpisodesContainer/EpisodePaginator";

const EpisodePage = () => {
    return (
        <div>
            <Episodes/>
            <EpisodePaginator/>
        </div>
    );
};

export {EpisodePage};