import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Grid, TextField, Button} from "@material-ui/core";
import {addWeatherToList} from "../../actions/WeatherActions";

const AddWeather = ({open = false, handleClose}) => {

    const dispatch = useDispatch();
    const [city, setCity] = useState("");

    const addWeather = () => {
        handleClose()
        dispatch(addWeatherToList(city));
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
                        <Grid item xs={10}>
                            <TextField name="cityName" label="Name" required value={city} onChange={e => setCity(e.target.value)}/>
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