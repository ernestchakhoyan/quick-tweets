import React from "react";
import { Typography, Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    container: {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "height": "100vh",
        "padding": theme.spacing(2)
    },
}));

function Index() {
    const classes = useStyles();

    const  stopProfileStreaming = () => {
        try {
            axios.post("api/stop-streaming")
        } catch (error) {
            console.log(error, "Error on stop streaming");
        }
    }

    return (
        <div className={classes.container}>
            <Typography variant="h1" color="primary">
                Հաղթելու ենք!!!
            </Typography>

            <Button
                color="primary"
                variant="outlined"
                onClick={stopProfileStreaming}
            >
                Stop streaming
            </Button>
        </div>
    );
}

export default Index;