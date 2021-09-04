import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteWeatherFromList, getWeatherList} from "../../actions/WeatherActions";
import AddWeather from "./AddWeather";
import Loading from "../Loading";
import _ from "lodash";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    IconButton,
} from "@material-ui/core";
import {Delete, Add} from "@material-ui/icons";

const WeatherList = () => {

    const dispatch = useDispatch();
    const weatherList = useSelector(state => state.WeatherList);
    const [open, setOpen] = useState(false);

    const changeValueOpen = (value) => {
        setOpen(value)
    }

    useEffect(() => {
        const fetchData = () => {
            dispatch(getWeatherList());
        };
        if(weatherList.data.length === 0) {
            fetchData();
        }
    }, [dispatch, weatherList.data]);

    const removeWeather = (id) => {
        dispatch(deleteWeatherFromList(id, weatherList));
    }

    const showData = () => {
        if(!_.isEmpty(weatherList.data)) {
            return (
                <TableContainer component={Paper}>
                    <Table stickyHeader size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{'font-weight':'bold'}}>
                                    City
                                </TableCell>
                                <TableCell style={{'font-weight':'bold'}}>
                                    Temp
                                </TableCell>
                                <TableCell style={{'font-weight':'bold'}}>

                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {weatherList.data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>
                                        {row.main.temp}°C
                                    </TableCell>
                                    <TableCell>
                                        <IconButton variant="outlined" color="secondary" onClick={() => removeWeather(row.id)}><Delete/></IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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
            <IconButton color="primary" onClick={() => changeValueOpen(true)}><Add/></IconButton>
            <AddWeather open={open} handleClose={() => changeValueOpen(false)}/>
            {showData()}
        </div>
    )
}

export default WeatherList;