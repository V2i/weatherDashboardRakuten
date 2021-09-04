import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getWeatherList} from "../../actions/WeatherActions";
import Loading from "../Loading";
import _ from "lodash";
import {Grid} from "@material-ui/core";
import WeatherWidget from "./WeatherWidget";

const Weather = (props) => {

    const dispatch = useDispatch();
    const weatherList = useSelector(state => state.WeatherList);

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(getWeatherList());
        };
        fetchData();
    }, [dispatch]);

    const showData = () => {
        if(!_.isEmpty(weatherList.data)) {
            return (
                <Grid container direction="row" spacing={5} alignItems="center" alignContent="center" justify="center">
                    {
                        weatherList.data.map(w =>
                            <Grid item xs={3} key={w.id}>
                                <WeatherWidget data = {w}/>
                            </Grid>
                        )
                    }
                </Grid>
            )
        }
        if(weatherList.loading) {
            return <div><Loading color={"lightblue"} type={"bubbles"}/></div>
        }
        if(weatherList.errorMsg !== "") {
            return <div>impossible to get data: {weatherList.errorMsg}</div>
        }
    };

    return (
        <div>
            {showData()}
        </div>
    )
}

export default Weather;