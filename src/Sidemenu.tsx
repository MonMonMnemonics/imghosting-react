import classes from "*.module.css";
import { AppBar, Button, makeStyles, Typography, Grid, Paper, TextField, Box } from "@material-ui/core";
import React, { useState } from "react";
import { useRouter } from "next/router"
import ROUTES from "./routes";

let useStyles = makeStyles((theme) => ({
    header: {
        marginBottom: theme.spacing(4)
    },
    support: {
        padding: theme.spacing(2)
    },
    DonationControl: {
        display: "flex",
        justifyContent: "right",
        width: "100%"
    }
}));

const Sidemenu: React.FC = () => {
    const classes = useStyles();
    const [Search_String, setSearch] = useState('');

    return (
        <>
            <Box m={3}>
                <Grid container direction="row" spacing={1} alignItems="center">
                    <Grid item>
                        <TextField id="TextField_Search" label="Search..." variant="outlined" value={Search_String} onChange={ (e)=>setSearch(e.target.value)}/>
                    </Grid>  
                    <Grid item>
                        <Button color="primary" variant="contained" href={"/?s=" + Search_String} size="large">Search</Button>
                    </Grid>  
                </Grid>
            </Box>

            <Box mt={3} mb={3}>
                <Paper className={classes.support}>
                    <Typography className={classes.header} variant="h5">Support us</Typography>
                    <Typography>donation button should go here</Typography>
                    <div className={classes.DonationControl}>
                        <Button color="primary" variant="contained" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Donate</Button>
                    </div>
                </Paper>
            </Box>

            <Box mt={3} mb={3}>
                <Paper className={classes.support}>
                    <Typography>Recent manga and stuff</Typography>
                </Paper>
            </Box>
        </>
    )
}

export default Sidemenu;