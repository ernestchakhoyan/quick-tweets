import React from "react";
import { Icon } from "@iconify/react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography, Grid, Button } from "@material-ui/core";
import facebookIcon from "@iconify/icons-mdi/facebook";
import TwitterLogin from "react-twitter-login";


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

    const facebookAuth = () => {
        window.open("https://www.facebook.com/v8.0/dialog/oauth?client_id=774302380025936&redirect_uri=https://42635b497f80.ngrok.io&scope=user_posts&response_type=token")
    }

    const twitterAuth = () => {
        window.open("https://api.twitter.com/oauth/authorize");
    }

    const authHandler = (err, data) => {
        console.log(err, data);
    };

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
                <TwitterLogin
                    authCallback={authHandler}
                    consumerSecret="Rq8TOaw6Sv6SGXFDzi1bRR0QYgoogrtNtHUgj8qSnCABaTeE6j"
                    consumerKey="3fu93WxvAevkMzrcuHnQIVuA9"
                    callbackUrl="https://42635b497f80.ngrok.io/twitter"
                />
            </Grid>
        </div>
    );
}

export default Authorize;