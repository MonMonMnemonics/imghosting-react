import { Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Paper, withStyles } from '@material-ui/core';
import { responsiveFontSizes ,createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PageContainer from "../src/PageContainer";
import Sidemenu from "../src/Sidemenu";
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


let useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(9),
        width: `calc(100% - ${theme.spacing(9) * 2}px)`
    },
    support: {
        padding: theme.spacing(2)
    },
    table: {
        minWidth: 700,
    }
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
    },
  }))(TableRow);
  
function createData(Title: string, LastCh: string, Remaining: number, Raws: number, WorkStatus: string, SeriesStatus: string) {
   return { Title, LastCh, Remaining, Raws, WorkStatus, SeriesStatus };
}

const Stats = ['Ongoing','Collab','Unfinished','Completed','Dropped'];

const rows = [
    createData('Ankoku Kishi no Ore desu Ga Saikyou no Seikishi wo Mezashimasu', '0', 0, 0, '', 'Ongoing'),
    createData('Next Life', '0', 0, 0, '', 'Ongoing'),
    createData('Douyara Watashi no Karada wa Kanzen Muteki no You Desu ne', '0', 0, 0, '', 'Collab'),
    createData('Tonari no Seki-kun Junior', '0', 0, 0, '', 'Collab'),
    createData('Kemono Giga', '0', 0, 0, '', 'Unfinished'),
    createData('Rivnes', '0', 0, 0, '', 'Unfinished'),
    createData('YuriCam ~Yurika no Campus Life~', '0', 0, 0, '', 'Completed'),
    createData('Isekai Ekisha no Kissaten', '0', 0, 0, '', 'Completed'),
    createData('Blade Breaker', '0', 0, 0, '', 'Dropped'),
    createData('Isekai Shoukan wa Nidome Desu', '0', 0, 0, '', 'Dropped'),
];

const Series = () => {
    const classes = useStyles();

    return <PageContainer>
        <Grid className={classes.root} container spacing={3}>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
            <Paper className={classes.support}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Title</StyledTableCell>
                        <StyledTableCell align="center">Latest Released Chapter</StyledTableCell>
                        <StyledTableCell align="center">Left to Release</StyledTableCell>
                        <StyledTableCell align="center">Raw Released</StyledTableCell>
                        <StyledTableCell align="center">Next Chapter Status</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>

                    <TableRow>
                        <StyledTableCell colSpan={5} align="center" style={{backgroundColor:'#C1C1C1'}}>{Stats[0]}</StyledTableCell>
                    </TableRow>
                    {
                        rows.filter(row => row.SeriesStatus == Stats[0]).map( (row) => (
                            <StyledTableRow key={row.Title}>
                                <StyledTableCell align="center">{row.Title}</StyledTableCell>
                                <StyledTableCell align="center">{row.LastCh}</StyledTableCell>
                                <StyledTableCell align="center">{row.Remaining}</StyledTableCell>
                                <StyledTableCell align="center">{row.Raws}</StyledTableCell>
                                <StyledTableCell align="center">{row.WorkStatus}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }

                    <TableRow>
                        <StyledTableCell colSpan={5} align="center" style={{backgroundColor:'#C1C1C1'}}>{Stats[1]}</StyledTableCell>
                    </TableRow>
                    {
                        rows.filter(row => row.SeriesStatus == Stats[1]).map( (row) => (
                            <StyledTableRow key={row.Title}>
                                <StyledTableCell align="center">{row.Title}</StyledTableCell>
                                <StyledTableCell align="center">{row.LastCh}</StyledTableCell>
                                <StyledTableCell align="center">{row.Remaining}</StyledTableCell>
                                <StyledTableCell align="center">{row.Raws}</StyledTableCell>
                                <StyledTableCell align="center">{row.WorkStatus}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                    
                    <TableRow>
                        <StyledTableCell colSpan={5} align="center" style={{backgroundColor:'#C1C1C1'}}>{Stats[2]}</StyledTableCell>
                    </TableRow>
                    {
                        rows.filter(row => row.SeriesStatus == Stats[2]).map( (row) => (
                            <StyledTableRow key={row.Title}>
                                <StyledTableCell align="center">{row.Title}</StyledTableCell>
                                <StyledTableCell align="center">{row.LastCh}</StyledTableCell>
                                <StyledTableCell align="center">{row.Remaining}</StyledTableCell>
                                <StyledTableCell align="center">{row.Raws}</StyledTableCell>
                                <StyledTableCell align="center">{row.WorkStatus}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }

                    <TableRow>
                        <StyledTableCell colSpan={5} align="center" style={{backgroundColor:'#C1C1C1'}}>{Stats[3]}</StyledTableCell>
                    </TableRow>
                    {
                        rows.filter(row => row.SeriesStatus == Stats[3]).map( (row) => (
                            <StyledTableRow key={row.Title}>
                                <StyledTableCell align="center">{row.Title}</StyledTableCell>
                                <StyledTableCell align="center">{row.LastCh}</StyledTableCell>
                                <StyledTableCell align="center">{row.Remaining}</StyledTableCell>
                                <StyledTableCell align="center">{row.Raws}</StyledTableCell>
                                <StyledTableCell align="center">{row.WorkStatus}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }

                    <TableRow>
                        <StyledTableCell colSpan={5} align="center" style={{backgroundColor:'#C1C1C1'}}>{Stats[4]}</StyledTableCell>
                    </TableRow>
                    {
                        rows.filter(row => row.SeriesStatus == Stats[4]).map( (row) => (
                            <StyledTableRow key={row.Title}>
                                <StyledTableCell align="center">{row.Title}</StyledTableCell>
                                <StyledTableCell align="center">{row.LastCh}</StyledTableCell>
                                <StyledTableCell align="center">{row.Remaining}</StyledTableCell>
                                <StyledTableCell align="center">{row.Raws}</StyledTableCell>
                                <StyledTableCell align="center">{row.WorkStatus}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                    
                    </TableBody>
                </Table>
                </TableContainer>
            </Paper>
            </Grid>
            <Grid item xs={4}>
                <Sidemenu/>
            </Grid>
        </Grid>
    </PageContainer>
};

export default Series;