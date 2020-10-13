import React from "react";
import {
    Button,
    CircularProgress,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TwitterLogin from "react-twitter-login";
import {
    getDataFromLocalStorage,
    removeDataFromLocalStorage,
    setDataToLocalStorage
} from "../utils/localStorage";

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
    const [ loading, setLoading ] = React.useState(false);
    const [ error, setError ] = React.useState("");
    const [ loggedIn, setLoggedIn ] = React.useState(false);
    const classes = useStyles();

    const authHandler = async (err, data) => {
        if (err || !data) {
            setError("Please try to log in again");
            return;
        }

        setLoading(true);
        setError("");

        try {
            let response = await fetch("api/auto-retweet", {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    access_token: data.oauth_token,
                    access_token_secret: data.oauth_token_secret,
                    user_id: data.user_id
                })
            });

            if (response.ok) {
                setLoading(false);
                setLoggedIn(true);
                setDataToLocalStorage("user_id", data.user_id);
            } else {
                setLoading(false);
                setError("Please try to log in again");
                console.log("HTTP-Error: " + response.status);
            }
        } catch (error) {
            console.log(error, "Error on twitter authorization");
            setError("Please try to log in again");
            setLoading(false);
        }
    };

    const logoutFromTwitter = async () => {
        setError("");
        setLoading(true);

        try {
            let response = await fetch("api/stop-streaming", {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    user_id: getDataFromLocalStorage("user_id"),
                })
            });

            if (response.ok) {
                setLoading(false);
                setLoggedIn(false);
                removeDataFromLocalStorage("user_id");
            } else {
                setLoading(false);
                setError("Please try to log out in again");
            }
        } catch (error) {
            setError("Please try to log out in again");
            setLoading(false);
        }
    };

    const renderButton = () => {
        if (!loggedIn) {
            return (
                <TwitterLogin
                    authCallback={authHandler}
                    consumerSecret="Rq8TOaw6Sv6SGXFDzi1bRR0QYgoogrtNtHUgj8qSnCABaTeE6j"
                    consumerKey="3fu93WxvAevkMzrcuHnQIVuA9"
                    callbackUrl="https://quick-tweets.herokuapp.com/login"
                />
            );
        } else {
            return (
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={logoutFromTwitter}
                >
                    Log out from Twitter
                </Button>
            );
        }
    };

    React.useEffect(() => {
        setTimeout(() => {
            const isInTwitter = getDataFromLocalStorage("user_id");
            setLoggedIn(isInTwitter);
        },1000);
    }, []);

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
                        {
                            loading
                                ? <CircularProgress color="primary" />
                                : renderButton()
                        }
                    </div>
                    {
                        error && (
                            <div className={classes.marginBottom}>
                                <Typography color="error" variant="h3">Please try again</Typography>
                            </div>
                        )
                    }

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