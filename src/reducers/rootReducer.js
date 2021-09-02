import {combineReducers} from "redux";

import weatherReducer from "./Weather/WeatherReducer";

const rootReducer = combineReducers({
    weather: weatherReducer

});

export default rootReducer;