import React from "react";
import {
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TwitterLogin from "react-twitter-login";
import axios from "axios";
import Router from "next";

const useStyles = makeStyles((theme) => ({
    containerRoot: {
        justifyContent: "center",
        display: "flex",
        marginTop: theme.spacing(2)
    },
    textField: {
        display: "flex",
        alignItems: "center"
    },
    gridRoot: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 50
    },
    title: {
        marginBottom: theme.spacing(2),
        textAlign: "center"
    },
    userContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    username: {
        color: theme.palette.primary.main
    },
    marginBottom: {
        marginBottom: theme.spacing(2),
    },
    textAlign: {
        textAlign: "center"
    }
}));

const trustedUsers = [
    { username: "@Pres_Artsakh", fullName: "Arayik Harutyunyan" },
    { username: "@arcrunmod", fullName: "Artsrun Hovhannisyan" },
    { username: "@ShStepanyan", fullName: "Shushan Stepanyan" },
    { username: "@NikolPashinyan", fullName: "Nikol Pashinyan" },
    { username: "@AvinyanTigran", fullName: "Tigran Avinyan" },
    { username: "@naghdalyan", fullName: "Anna A. Naghdalyan" },
    { username: "@Artak_Beglaryan", fullName: "Artak Beglaryan" },
    { username: "@atatoyan", fullName: "Arman Tatoyan" },
    { username: "@ZMnatsakanyan", fullName: "Zohrab Mnatsakanyan" },
    { username: "@Robbie_Raul", fullName: "Robert Markosyan" },
    { username: "@mfankr", fullName: "MFA of Artsakh" },
    { username: "@ArmenianUnified", fullName: "Armenian Unified Infocenter" },
    { username: "@armgov", fullName: "Goverment of Armenia" },
    { username: "@armeniamodteam", fullName: "MoD of Armenia" },
    { username: "@MFAofArmenia", fullName: "MFAofArmenia" },
    { username: "@Karabakh_MoD", fullName: "MoD of Karabakh" },
    { username: "@anca_dc", fullName: "ANCA" },
    { username: "@artsakhpress", fullName: "ArtsakhPress Agency" },
    { username: "@MediamaxNews", fullName: "MediaMax" },
    { username: "@PanARMENIAN_eng", fullName: "PAN.am | English" },
    { username: "@CivilNetTV", fullName: "CIVILNET" },
    { username: "@evn_report", fullName: "EVN Report" },
    { username: "@ZartonkMedia", fullName: "Zartonk Media" },
    { username: "@infocom_am", fullName: "Infocom" },
    { username: "@armradio", fullName: "Public Radio" },
    { username: "@a1plusnews", fullName: "A1plus" },
];

function Index() {
    const classes = useStyles();

    const authHandler = (err, data) => {
        console.log(data);

        if (err || !data) {
            return;
        }

        try {
            axios.post(
                "api/auto-retweet",
                {
                    "access_token": data.user_id,
                    "access_token_secret": data.oauth_token,
                }
            ).then(() => {
                    Router.push("/twitter");
                });
        } catch (error) {
            console.log(error, "Error on twitter authorization");
        }
    };

    return (
        <React.Fragment>
            <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                <img className={classes.image} src="/static/armenia.gif" alt="armenian flag"
                     style={{ marginRight: 10 }} />
                <img className={classes.image} src="/static/artsakh.gif" alt="artsakh flag" />
            </Container>
            <Container
                className={classes.containerRoot}
            >
                <Grid className={classes.gridRoot}>
                    <Typography
                        variant="h2"
                        color="primary"
                        className={classes.title}
                    >
                        Please authorize in Twitter for automation.
                    </Typography>
                    <div className={`${classes.gridRoot} ${classes.marginBottom}`}>
                        <TwitterLogin
                            authCallback={authHandler}
                            consumerSecret="Rq8TOaw6Sv6SGXFDzi1bRR0QYgoogrtNtHUgj8qSnCABaTeE6j"
                            consumerKey="3fu93WxvAevkMzrcuHnQIVuA9"
                            callbackUrl="https://quick-tweets.vercel.app/twitter"
                        />
                    </div>
                    <div
                        className={classes.marginBottom}
                    >
                        <Typography
                            variant="h2"
                            color="textPrimary"
                            className={`${classes.marginBottom} ${classes.textAlign}`}
                        >
                            Trusted twitter accounts
                        </Typography>
                        {
                            trustedUsers.map((item) => {
                                return (
                                    <div
                                        key={item.username}
                                        className={`${classes.userContainer} ${classes.marginBottom}`}
                                    >
                                        <span
                                            className={classes.username}>{item.username}</span> - <span>{item.fullName}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Index;