import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Grid, TextField, Button} from "@material-ui/core";
import {addWeatherToList} from "../../actions/WeatherActions";

const AddWeather = ({open = false, handleClose}) => {

    const dispatch = useDispatch();

    const addWeather = () => {
        handleClose()
        dispatch(addWeatherToList("Marseille"));
    };

    return(
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Add a new city</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">

                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <TextField name="cityName" label="Name" />
                        </Grid>
                    </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={addWeather}>Add</Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddWeather;