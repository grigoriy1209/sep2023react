import {configureStore} from "@reduxjs/toolkit";
import {carsUpdateAction} from "./carsUpdateSlice";
import {carsCreateActions} from "./carsCreateSlice";
import {carsReducer} from "./carsSlice";


const store = configureStore({
    reducer:{
        // create:carsCreateActions.createCar,
        // update:carsUpdateAction.updateCar
        cars:carsReducer
    }
});
export {store}