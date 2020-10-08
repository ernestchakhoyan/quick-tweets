import React from "react";
import { isAuthorized } from "../utils/tools";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
    container: {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "height": "100vh",
        "padding": theme.spacing(2)
    },
    gridRoot: {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "height": "100%",
        "width": "100%",
        marginTop: theme.spacing(4)
    },
    fullWidth: {
        width: "100%",
        flexBasis: 0
    },
    marginRight: {
        marginRight: theme.spacing(2)
    }
}));

function Index() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h1" color="primary">
                Հաղթելու ենք!!!
            </Typography>
        </div>
    );
}

export default Index;