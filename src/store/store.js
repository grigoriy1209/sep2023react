import {configureStore} from "@reduxjs/toolkit";
import {episodesReducer} from "./slices/episodeSlice";

const store = configureStore({
    reducer:{
        episodesReducer
    }
    }
)
export {
    store
}