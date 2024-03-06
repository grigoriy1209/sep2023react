import {configureStore} from "@reduxjs/toolkit";

import {carsReducer} from "./slices/carsSlice";


const store = configureStore({
    reducer:{
        // create:carsCreateActions.createCar,
        // update:carsUpdateAction.updateCar
        cars:carsReducer
    }
});
export {store}