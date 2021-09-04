import axios from "axios";
import APIKEY from "../API";

const APIURL = "https://api.openweathermap.org/data/2.5/weather?";

export const getWeatherList = () => async dispatch => {

    try{

        dispatch({
            type: "WEATHER_LIST_LOADING",
        });

        const resMontpellier = await  axios.get(`${APIURL}q=Montpellier&units=metric${APIKEY}`);

        const resLondon = await axios.get(`${APIURL}q=London&units=metric${APIKEY}`);

        const resParis = await axios.get(`${APIURL}q=Paris&units=metric${APIKEY}`);

        dispatch({
            type: "WEATHER_LIST_SUCCESS",
            payload: [resMontpellier.data, resLondon.data, resParis.data],
        });
    } catch (e) {

        dispatch({
            type: "WEATHER_LIST_FAIL",
            err: e,
        });
    }

};