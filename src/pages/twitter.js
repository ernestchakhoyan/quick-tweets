import React from "react";
import { CircularProgress } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
    container: {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "height": "100vh",
        "padding": theme.spacing(2)
    }
}));

function Twitter() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CircularProgress color="primary" />
        </div>
    );
}

export default Twitter;