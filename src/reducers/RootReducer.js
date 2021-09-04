import {combineReducers} from "redux";

import WeatherReducer from "./Weather/WeatherReducer";

const RootReducer = combineReducers({
    WeatherList: WeatherReducer,

});

export default RootReducer;