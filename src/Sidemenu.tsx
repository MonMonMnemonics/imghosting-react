import classes from "*.module.css";
import { AppBar, Button, makeStyles, Typography, Grid, Paper, TextField, Box } from "@material-ui/core";
import React, { useState } from "react";
import { useRouter } from "next/router"
import ROUTES from "./routes";

//FOR ICONS
import { Icon } from 'react-icons-kit'
import { magnifying_glass, paypal } from 'react-icons-kit/ikons'

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
                        <TextField style={{ background:'#FFFFFF', color:'#000000' }} id="TextField_Search" label="Search..." variant="outlined" value={Search_String} onChange={ (e)=>setSearch(e.target.value)}/>
                    </Grid>  
                    <Grid item>
                        <Button style={{ background:'#912685' }} color="primary" variant="contained" href={"/?s=" + Search_String} size="large"><Icon icon={magnifying_glass}/>&nbsp;Search</Button>
                    </Grid>  
                </Grid>
            </Box>

            <Box mt={3} mb={3}>
                <Paper className={classes.support}>
                    <Typography className={classes.header} variant="h5">Support us</Typography>
                    <Typography>donation button should go here</Typography>
                    <div className={classes.DonationControl}>
                        <Button style={{ background:'#912685' }} color="primary" variant="contained" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><Icon icon={paypal}/>&nbsp;Donate</Button>
                    </div>
                </Paper>
            </Box>

            <Box mt={3} mb={3}>
                <Paper className={classes.support}>
                    <Typography>Recent manga and stuff</Typography>
                </Paper>
            </Box>

            <Box mt={3} mb={3}>
                <Paper className={classes.support}>
                    <form method="POST" action="http://localhost:33333/upload-all" encType="multipart/form-data">
                        <div>
                            <label>Select multiple images:</label>
                            <input type="file" name="images" multiple />
                        </div>
                        <div>
                            <label>HeadPath</label>
                            <input type="text" name="HeadPathX"/>
                        </div>
                        <div>
                            <input type="submit" value="Upload" />
                        </div>
                    </form>
                </Paper>
            </Box>
        </>
    )
}

export default Sidemenu;