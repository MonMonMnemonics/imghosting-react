import { Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PageContainer from "../src/PageContainer";
import { useState } from 'react';




const useStyles = makeStyles((theme) => ({
}));

const About = () => {
    return <PageContainer>
        <Typography>About Page</Typography>
    </PageContainer>
};

export default About;