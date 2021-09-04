import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Typography } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    source: {
        fontSize: 10,
    },
});

const WeatherWidget = ({data}) => {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.source} color="textSecondary" gutterBottom>
                        OpenWeather Data
                    </Typography>
                    <Typography variant="h4" component="h2">
                        {data.name}
                    </Typography>
                    <Typography variant="h6" component="p">
                        {data.main.temp}°C
                    </Typography>
                    <Icon className="fa fa-cloud-sun" fontSize="large"/>
                </CardContent>
            </Card>
        </div>
    )
};

export default WeatherWidget;