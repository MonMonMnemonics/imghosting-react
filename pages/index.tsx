import { Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PageContainer from "../src/PageContainer";
import Sidemenu from "../src/Sidemenu";
import { useState } from 'react';
import { useRouter } from 'next/router'

//  FOR ICONS
import { Icon } from 'react-icons-kit'
import { book_2 } from 'react-icons-kit/ikons'


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(9),
        width: `calc(100% - ${theme.spacing(9) * 2}px)`,
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
                <img src="https://via.placeholder.com/150"/>
            </CardContent>
            <CardActions>
                <div className={classes.cardControls}>
                    <Button style={{ background:'#912685' }} color="primary" variant="contained" href={"/Reader/" + title.replace(/\s/g, "_")}><Icon icon={book_2}/>&nbsp;Read</Button>
                </div>
            </CardActions>
        </Card>
    )
}

type SortBy = "recent" | "popular";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:33333/recent/");
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        data
      },
    }
  }

const Index = ({ data }: any) => {
    const classes = useStyles();
    const [sortBy, setSortBy] = useState("recent");
    const router = useRouter();
    const { s } = router.query

    return (
        <PageContainer>
                <Grid className={classes.root} container spacing={3}>
                    <Grid item xs={2}>
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
                        
                        {data.map((dt: any) => (
                            <MangaCard title={dt.Chapter} date={new Date(dt.TimeStamp).toDateString()} />
                        ))}
                        
                    </Grid>
                    <Grid item xs={4}>
                        <Sidemenu/>
                    </Grid>
                </Grid>
        </PageContainer>
    )
}

export default Index;