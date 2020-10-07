import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Icon } from "@iconify/react";
import { Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import twitterIcon from "@iconify/icons-mdi/twitter";
import facebookIcon from "@iconify/icons-mdi/facebook";


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
    title: {
        marginBottom: theme.spacing(2),
        textAlign: "center"
    },
    button: {
        marginBottom: theme.spacing(2)
    }
}));

function Authorize(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography
                variant="h1"
                color="primary"
                className={classes.title}
            >
                Authorize
            </Typography>

            <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.title}
            >
                Please authorize in Facebook or Twitter for automation.
            </Typography>
            <Grid
                className={classes.gridRoot}
                item
                xs={12}
                md={6}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    disableRipple
                    className={classes.button}
                >
                    <span style={{ marginRight: 10 }}>Log in to Twitter</span>
                    <Icon icon={twitterIcon} />
                </Button>

                <Button
                    variant="outlined"
                    color="primary"
                    disableRipple
                    className={classes.button}
                >
                    <span style={{ marginRight: 10 }}>Log in to Facebook</span>
                    <Icon icon={facebookIcon} />
                </Button>

            </Grid>
        </div>
    );
}

export default Authorize;