import React from "react";
import { CircularProgress } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Router from "next/router";


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

    React.useEffect(() => {
        setTimeout(() => {
            Router.push("/success");
        },3000)
    },[])

    return (
        <div className={classes.container}>
            <CircularProgress color="primary" />
        </div>
    );
}

export default Twitter;