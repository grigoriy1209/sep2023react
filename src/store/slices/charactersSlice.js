import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";


const initialState = {
    characters: []
}
const getAll = createAsyncThunk(
    'charactersSlice/getAll',
    async ({ids},thunkAPI)=>{
        try {
              const{data} = await characterService.getByIds(ids);
              return data
        }catch (e){
           return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const charactersSlice = createSlice({
    name: ' charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state,actions)=>{
                state.characters = actions.payload
            })

})
const {reducer:charactersReducer, actions}= charactersSlice;

const characterActions = {
    ...actions,
    getAll
}
export {
    characterActions,
    charactersReducer
}