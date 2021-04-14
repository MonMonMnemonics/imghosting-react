import { useRouter } from 'next/router'
import ReaderHead from '../../src/ReaderHead'
import { Grid, makeStyles } from '@material-ui/core';

import useSWR from "swr";

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(9),
      width: `calc(100% - ${theme.spacing(9) * 2}px)`
  }
}));

const fetcher = (url: any) => fetch(url).then(res => res.json());


function Reader() {
  const classes = useStyles();
  const router = useRouter();
  const { title } = router.query;

  const { data, error } = useSWR(
    "http://localhost:33333/chapter/" + title,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <>
      <ReaderHead>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
             {data.map((dt: any) => (
                //<li>{dt.filepath}</li>
                <img style={{ width: '100%'}} src={"http://localhost:33333/image/" + dt.filepath }/>
              ))}
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </ReaderHead>      
    </>
  )
}

export default Reader
