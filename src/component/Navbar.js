import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginRight: theme.spacing(10),
    },
}));

const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>Weather Dashboard</Typography>
                    <Button color="inherit" className={classes.menuButton} component={Link} to="/home">Home</Button>
                    <Button color="inherit" className={classes.menuButton} component={Link} to="/settings">Settings</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;