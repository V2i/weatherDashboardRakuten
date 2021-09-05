import axios from "axios";

const APIURL = "https://api.openweathermap.org/data/2.5/weather?";

export const getWeatherList = () => async dispatch => {

    try{

        dispatch({
            type: "WEATHER_LIST_LOADING",
        });

        const resMontpellier = await axios.get(`${APIURL}q=Montpellier&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

        const resLondon = await axios.get(`${APIURL}q=London&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

        const resParis = await axios.get(`${APIURL}q=Paris&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

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

export const deleteWeatherFromList = (id) => async dispatch => {

    try{

        dispatch({
            type: "WEATHER_LIST_REMOVE",
            id: id
        });

    } catch(e) {

        dispatch({
            type: "WEATHER_LIST_FAIL",
            err: e,
        });
    }
};

export const addWeatherToList = (name) => async dispatch => {

    try{

        const res = await axios.get(`${APIURL}q=${name}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

        dispatch({
            type: "WEATHER_LIST_ADD",
            payload: res.data,
        });

    } catch (e) {

        dispatch({
            type: "WEATHER_LIST_FAIL",
            err: e,
        });
    }
};