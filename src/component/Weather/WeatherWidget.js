import React from "react";
import {Card, CardContent, Typography } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import {weatherIcons} from "../../WeatherIcons";

const WeatherWidget = ({data}) => {

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="body5">
                        OpenWeather Data
                    </Typography>
                    <Typography variant="h4" component="h2">
                        {data.name}
                    </Typography>
                    <Typography variant="h6" component="p">
                        {data.main.temp}°C
                    </Typography>
                    <Typography variant="body2" component="p">
                        {data.weather[0].description}
                    </Typography>
                    <Icon className={weatherIcons(data.weather[0].main)} fontSize="large"/>
                </CardContent>
            </Card>
        </div>
    )
};

export default WeatherWidget;