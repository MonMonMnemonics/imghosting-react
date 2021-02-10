import { Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PageContainer from "../src/PageContainer";
import Sidemenu from "../src/Sidemenu";
import { useState } from 'react';
import { useRouter } from 'next/router'

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
                    <Button color="primary" variant="contained" href={"/Reader/" + title.replace(/\s/g, "_")}>Read</Button>
                </div>
            </CardActions>
        </Card>
    )
}

const MANGAS: [string, Date][] = [
    ["Boku No Pico Ch69", new Date("1 April 2020")],
    ["Boku No Pico Ch68", new Date("24 March 2020")]
]

type SortBy = "recent" | "popular";

const Index = () => {
    const classes = useStyles();
    const [sortBy, setSortBy] = useState("recent");
    const router = useRouter();
    const { s } = router.query

    return (
        <PageContainer>
                <Grid className={classes.root} container spacing={3}>
                    <Grid item xs={3}>
                    </Grid>                    

                    <Grid item xs={6}>
                        <Typography className={classes.header} variant="h5">Mangas</Typography>
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
                    <Grid item xs={3}>
                        <Sidemenu/>
                    </Grid>
                </Grid>
        </PageContainer>
    )
}

export default Index;