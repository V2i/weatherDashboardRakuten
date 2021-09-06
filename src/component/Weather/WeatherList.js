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
    TablePagination,
    TableFooter
} from "@material-ui/core";
import {Delete, Add} from "@material-ui/icons";

const WeatherList = () => {

    const dispatch = useDispatch();
    const weatherList = useSelector(state => state.WeatherList);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const changeValueOpen = (value) => {
        setOpen(value);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
    };

    const showData = () => {
        if(!_.isEmpty(weatherList.data)) {
            return (
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="custom pagination table">
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
                            {
                                (rowsPerPage > 0
                                        ? weatherList.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : weatherList.data
                                ).map((row) => (
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
                        <TableFooter>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={weatherList.data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableFooter>
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