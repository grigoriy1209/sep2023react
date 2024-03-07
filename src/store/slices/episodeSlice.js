import {createSlice} from "@reduxjs/toolkit";

const initialState={
   episodes: [],
    prev:null,
    next:null

}

const episodeSlice = createSlice({
    name:'episodeSlice',
    initialState,
    reducers:{
        setResponse:(state, action)=>{
            const{info:{prev,next}, results}= action.payload
            state.episodes =results
            state.prev = prev
            state.next = next
        }

    }
    })
const {reducer:episodesReducer,actions} = episodeSlice

const episodesActions = {
    ...actions
}
export {
    episodesActions,
    episodesReducer
}