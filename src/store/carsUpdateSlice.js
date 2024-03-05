import {createSlice} from "@reduxjs/toolkit";

const initialState={
    carsList:[]
}

const carsUpdateSlice = createSlice({
    name:'carsUpdateSlice',
    initialState,
    reducers:{
        updateCar(state,action){
            state.carsList.put(action.payload)
        }
    }
})
const {updateCar}= carsUpdateSlice.actions;

const carsUpdateAction = {
    updateCar
}


export {
    carsUpdateAction,
    updateCar
}