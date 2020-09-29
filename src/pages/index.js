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
    }
}));

function Index(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container style={{display: "flex", alignItems: "center", height: 30,  margin: "20px 15px"}}>
                <span style={{display: "flex", marginRight: 10}}>
                    <ReportIcon color="primary"/>
                </span>
                <Typography
                    variant="h2"
                    color="primary"
                    className={classes.textField}
                >
                    Web site-ի նպատակն է` twitter-ում արագ retweet անելը: Բայց խնդրում ենք հաշվի առնել, որ բազմաթիվ retweet անելու դեպքում հնարավոր է twitter-ը արգելափակի ձեր account-ը;
                </Typography>
            </Container>
            <Container style={{display: "flex", alignItems: "center",justifyContent: "center",marginTop: 30}}>
                <img className={classes.image} src="/static/armenia.gif" alt="armenian flag" style={{marginRight: 10}}/>
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