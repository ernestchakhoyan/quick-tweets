import React from "react";
import Router from "next/router";
import {
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ReportIcon from "@material-ui/icons/Report";
import { isAuthorized } from "../utils/tools";

const useStyles = makeStyles((theme) => ({
    containerRoot: {
        height: "calc(100vh - 150px)",
        justifyContent: "center",
        display: "flex",
        alignItems: "center"
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
    inputRoot: {
        display: "flex",
        flexDirection: "column",
        "& > *": {
            margin: theme.spacing(1),
            width: 300,
        },
    },
    image: {
        width: 100,
        height: 50
    },
    loaderContainer: {
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
    }
}));

function Index() {
    const classes = useStyles();
    const [ loading, setLoading ] = React.useState(false);

    React.useEffect(() => {
        Router.events.on("routeChangeStart", () => setLoading(true));
        Router.events.on("routeChangeComplete", () => setLoading(false));
        Router.events.on("routeChangeError", () => setLoading(false));
    }, []);

    React.useEffect(() => {
        if(isAuthorized()){
            Router.push("/");
        }
    },[])

    return !loading ? (
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
                        variant="h1"
                        color="primary"
                        className={classes.textField}
                    >
                        <span style={{ marginRight: 10 }}>Log in</span>
                    </Typography>


                    <form className={classes.inputRoot} noValidate autoComplete="off">
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type="password"
                        />
                    </form>


                    <Button
                        variant="outlined"
                        color="primary"
                        disableRipple
                    >
                        <span>Login</span>
                    </Button>
                </Grid>
            </Container>
        </React.Fragment>
    ) : (
        <Container className={classes.loaderContainer}>
            <CircularProgress />
        </Container>
    );
}

export default Index;