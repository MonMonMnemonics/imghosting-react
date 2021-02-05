import classes from "*.module.css";
import { AppBar, Button, makeStyles, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@material-ui/core";
import React from "react";
import { useRouter } from "next/router"
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
    headerWrapper: {
        display: "flex",
        flexDirection: "column",
        marginRight: theme.spacing(1)
    }
}));

const PageContainer: React.FC = ({ children }) => {

    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return (
        <>
            <AppBar elevation={trigger ? 4 : 0} position="static">
                <Toolbar>
                    <div className={classes.headerWrapper}>
                        <Typography variant="h4">Imanity</Typography>
                        <Typography variant="caption">Is this even a real translation group?</Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <div>
                {children}
            </div>
        </>
    )
}

export default PageContainer;