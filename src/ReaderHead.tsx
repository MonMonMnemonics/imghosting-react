import classes from "*.module.css";
import { AppBar, Button, Link, makeStyles, Toolbar, Typography, useScrollTrigger, FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";
import React from "react";
import { useRouter } from "next/router"
import ROUTES from "./routes";

const useStyles = makeStyles((theme) => ({
    headerWrapper: {
        display: "flex",
        flexDirection: "column",
        marginRight: theme.spacing(1),
    },
    rightToolbar: {
        marginLeft: "auto",
        marginRight: -12
    }
}));

const ReaderHead: React.FC = ({ children }) => {

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
                        <Link variant="h4" href="/" color="inherit" underline="none">Imanity</Link>
                        <Typography variant="caption">Is this even a real translation group?</Typography>
                    </div>

                    <section className={classes.rightToolbar}>
                        <Button style={{ color:"white" }}> Prev </Button>
                        <FormControl style={{ width:"15em" }}>
                            <Select style={{ color:"white", marginLeft:"1em", marginRight:"1em" }} displayEmpty={true}>
                                <MenuItem value="">Selector</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>
                        <Button style={{ color:"white" }}> Next </Button>
                    </section>
                </Toolbar>
            </AppBar>
            <div>
                {children}
            </div>
        </>
    )
}

export default ReaderHead;