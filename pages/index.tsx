import { Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PageContainer from "../src/PageContainer";
import { useState } from 'react';




const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(9),
        width: `calc(100% - ${theme.spacing(9) * 2}px)`
    },
    cardRoot: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(1)
    },
    cardControls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        width: "100%"
    },
    header: {
        marginBottom: theme.spacing(4)
    },
    support: {
        padding: theme.spacing(2)
    }
}));

interface MangaCardProps {
    date: string;
    title: string;
}

const MangaCard: React.FC<MangaCardProps> = ({ date, title }) => {
    const classes = useStyles();
    return (
        <Card className={classes.cardRoot}>
            <CardContent>
                <Typography color="textSecondary">
                    {date}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <div className={classes.cardControls}>
                    <Button color="primary" variant="contained">Read</Button>
                </div>
            </CardActions>
        </Card>
    )
}

const MANGAS: [string, Date][] = [
    ["Boku No Pico Ch69", new Date("1 April 2020")],
    ["Boku No Pico Ch68", new Date("24 March 2020")],
    ["Boku No Pico Ch67.420", new Date("6 March 2020")],
    ["Wan Peesu", new Date("1 March 2020")]
]

type SortBy = "recent" | "popular";

const Index = () => {
    const classes = useStyles();
    const [sortBy, setSortBy] = useState("recent");
    return (
        <PageContainer>
                <Grid className={classes.root} container spacing={3}>
                    <Grid item xs={4} />
                    <Grid item xs={3}>
                        <Typography className={classes.header} variant="h5">Mangas and Shit</Typography>
                        <FormControl>
                            <InputLabel>Sort By</InputLabel>
                            <Select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortBy)}
                            >
                            <MenuItem value={"recent"}>Recent</MenuItem>
                            <MenuItem value={"popular"}>Popular</MenuItem>
                            </Select>
                        </FormControl>
                        
                        {MANGAS.map(([title, date]) => (
                            <MangaCard title={title} date={date.toDateString()} />
                        ))}

                        
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={classes.support}>
                            <Typography className={classes.header} variant="h5">Support us and shit</Typography>
                            <Typography>idk you want a donate button or something? maybe two so one can fund my gin habit</Typography>
                        </Paper>
                    </Grid>
                </Grid>
        </PageContainer>
    )
}

export default Index;