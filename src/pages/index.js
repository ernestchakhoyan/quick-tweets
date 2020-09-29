import React from "react";
import {
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ReportIcon from '@material-ui/icons/Report';
import { Icon } from "@iconify/react";
import twitterIcon from "@iconify/icons-mdi/twitter";

const useStyles = makeStyles((theme) => ({
    containerRoot: {
        height: "calc(100vh - 60px)",
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
}));

function Index(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container style={{display: "flex", alignItems: "center", height: 30}}>
                <span style={{display: "flex", marginRight: 10}}>
                    <ReportIcon color="primary"/>
                </span>
                <Typography
                    variant="h2"
                    color="primary"
                    className={classes.textField}
                >
                    This web site is created for quick retweets.  #haghteluENQ!
                </Typography>
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
                        <span style={{ marginRight: 10 }}>Log in to Twitter</span>
                        <Icon icon={twitterIcon} />
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
    );
}

export default Index;