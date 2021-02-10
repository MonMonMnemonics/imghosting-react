import classes from "*.module.css";
import { AppBar, Button, Link, makeStyles, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@material-ui/core";
import React from "react";
import { useRouter } from "next/router"
import ROUTES from "./routes";

const useStyles = makeStyles((theme) => ({
    headerWrapper: {
        display: "flex",
        flexDirection: "column",
        marginRight: theme.spacing(1),
        width:"98vw", 
        maxWidth:"1050px",
        '@media (max-width:600px)': {
            textAlign:"center"   
        }
    }
}));



const PageContainer: React.FC = ({ children }) => {

    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    const router = useRouter();
    const route = ROUTES.findIndex(({route}) => router.pathname === route);
    console.log({route})

    const handleTabChange = (ev: React.ChangeEvent<{}>, newValue: number) => {
        router.push(ROUTES[newValue].route);
    }

    return (
        <>
            <AppBar elevation={trigger ? 4 : 0} position="static">
                <Toolbar style={{ display:'flex', justifyContent:'center' }}>
                    <div className={classes.headerWrapper}>
                        <Link variant="h4" href="/" color="inherit" underline="none">Imanity</Link>
                        <Typography variant="caption">Is this even a real translation group?</Typography>
                    </div>
                </Toolbar>
                <Tabs centered={true} value={route} onChange={handleTabChange} >
                    {ROUTES.map(({name}, idx) => 
                        <Tab value={idx} label={name} />
                    )}
                </Tabs>
            </AppBar>
            <div>
                {children}
            </div>
        </>
    )
}

export default PageContainer;