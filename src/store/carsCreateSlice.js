import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    carsList:[]
}
const carsCreateSlice = createSlice({
    name:'carsCreateSlice',
    initialState,
    reducers:{
        createCar(state,action){
            state.carsList.post(action.payload)
        }
    }
})
const {createCar} = carsCreateSlice.actions;
 const carsCreateActions ={
     createCar
 }


export {
 carsCreateActions,
    createCar
}