import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Typography } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        marginBottom: 10,
    },
    source: {
        fontSize: 10,
    },
    icon: {
        marginRight: 5
    }
});

const WeatherWidget = (props) => {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.source} color="textSecondary" gutterBottom>
                        OpenWeather Data
                    </Typography>
                    <Typography variant="h4" component="h2">
                        Montpellier
                    </Typography>
                    <Typography variant="h6" component="p">
                        15°C
                    </Typography>
                    <Icon className="fa fa-cloud-sun" fontSize="large"/>
                </CardContent>
            </Card>
        </div>
    )
};

export default WeatherWidget;