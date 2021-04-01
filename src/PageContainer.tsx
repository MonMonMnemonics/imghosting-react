import classes from "*.module.css";
import { AppBar, Button, Link, makeStyles, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@material-ui/core";
import React from "react";
import { useRouter } from "next/router"
import ROUTES from "./routes";

//  FOR ICONS
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon'
import { questionCircle, listAlt } from 'react-icons-kit/fa'

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
    },
    logohead: {
        width: "287px",
        height: "150px"
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
            <AppBar elevation={trigger ? 4 : 0} position="static" style={{ background: '#000000' }}>
                <Toolbar style={{ display:'flex', justifyContent:'center'}}>
                    <div className={classes.headerWrapper}>
                        <a href="/"><img className={classes.logohead} src={`/imanitypawn.png`}/></a>
                    </div>
                </Toolbar>
                <Tabs centered={true} value={route} onChange={handleTabChange} >
                    <Tab value={0} label={ <><div><Icon icon={home}/> HOME</div></>} />
                    <Tab value={2} label={ <><div><Icon icon={listAlt}/> SERIES</div></>} />
                    <Tab value={1} label={ <><div><Icon icon={questionCircle}/> ABOUT</div></>} />
                </Tabs>
            </AppBar>
            <div >
                {children}
            </div>
        </>
    )
}

export default PageContainer;