import { Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import { responsiveFontSizes ,createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PageContainer from "../src/PageContainer";
import Sidemenu from "../src/Sidemenu";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(9),
        width: `calc(100% - ${theme.spacing(9) * 2}px)`
    }
}));

let theme = createMuiTheme({
    typography: {
        h1: {
            fontSize: "5rem",
            textDecoration: "underline"
        },
        
        h2:{
            fontSize: "3rem"
        }
    }
  });

theme = responsiveFontSizes(theme);

const About = () => {
    const classes = useStyles();

    return <PageContainer>
        <Grid className={classes.root} container spacing={3}>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
                <ThemeProvider theme={theme}>
                    <Typography variant={'h1'} align={'center'} gutterBottom={true}>
                        We’re Imanity Scans.
                    </Typography>

                    <Typography variant={'h2'} gutterBottom={true}>
                        Introduction
                    </Typography>
                    <Typography display={'block'}>
                        In case you’re curious where we go the group name from, my favourite series of all time didn’t have anything that sounded cool enough.
                        Our number 1 priority is and always will be quality.
                    </Typography>
                    <Typography display={'block'}>
                        We’re a group that mainly does whatever we find to be good or interesting, but we always make sure we put in our best effort into every single page to ensure people get the best reading experience possible.
                    </Typography>
                    <Typography display={'block'} paragraph={true}>
                        Some of our favourite works include Succubus & Hitman, Eko Eko Azaraku: Reborn, Kemono Giga, Adashino-san wa Sude ni Shinderu, and really, the vast majority of the series we’ve worked on.
                    </Typography>
                    <hr/>

                    <Typography variant={'h2'} gutterBottom={true}>
                        History
                    </Typography>
                    <Typography display={'block'}>
                        Our group was founded on April 22nd 2019 with a team of 8 people. As of today, we’ve now grown to a team of 20 active members.
                    </Typography>
                    <Typography display={'block'}>
                        Since we began, we’ve been continuously taking on even more interesting and challenging series, especially in terms of story and art style. In the future we’re aiming to take on even more projects and provide you with more consistently high quality scanlations, though if our biggest goals come to fruition, you may not just be reading scanlations from us.
                    </Typography>
                    <hr/>

                    <Typography variant={'h2'} gutterBottom={true}>
                        Goal
                    </Typography>
                    <Typography display={'block'}>
                        For our other goals for the future, we hope to grow even more as a group in both size and consistency. We also want to be able to provide a platform where we can bring readers a reading experience that is the best it can be as well as allow people to contact staff directly and ask questions or get some insight into our process when creating the chapters.
                    </Typography>
                    <Typography display={'block'}>
                        Currently, our biggest goal is to become a legitimate group who licenses manga from creators in order to directly support them with official translations. In order to achieve it, we are currently polishing and refining our quality as far as we possibly can to be able to face authors with a straight face and provide a product that is worth your money. 
                    </Typography>
                    <Typography display={'block'} paragraph={true}>
                        We’re working as hard as we can in order to achieve our goals and we hope that our readers will do what they can to support us in these goals.
                    </Typography>
                    <hr/>

                    <Typography variant={'h2'} gutterBottom={true}>
                        Message to Readers
                    </Typography>
                    <Typography display={'block'}>
                        I as the creator and leader of Imanity Scans wish to say how much it means to me to see people that read all of our series or trust us enough to release something of quality that they’ll support us directly financially. As a group that pays the vast majority of my staff from my own pocket, the support really does mean a lot. Even an amount as small as a dollar adds up to make a huge difference.
                    </Typography>
                    <Typography display={'block'}>
                        I started this group to do justice to the series that I love and I’m more motivated than ever to provide that. I genuinely believe that all our series are worth reading and I’m passionate about living up to the work done by the original authors.
                    </Typography>
                    <Typography display={'block'} paragraph={true}>
                        I hope that our work can help someone through a tough time emotionally or even motivate someone to give back to the authors that bring them so many hours of entertainment and enjoyment.
                    </Typography>

                    <Typography display={'block'} paragraph={true}>
                        Our doors are always open to new blood and we’re happy to provide support to people wanting to get into the industry.
                    </Typography>

                    <Typography display={'block'} paragraph={true}>
                        As a small note to people looking to use our work to translate into other languages, I’m more than happy for you to do that, hell, if you message me on discord I’ll even send you the files to do so with as much quality as possible. All I ask in return is you properly credit us for it as we put a lot of work into it.
                    </Typography>

                </ThemeProvider>
            </Grid>
            <Grid item xs={3}>
                <Sidemenu/>
            </Grid>
        </Grid>
    </PageContainer>
};

export default About;