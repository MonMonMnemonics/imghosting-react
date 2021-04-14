import { useRouter } from 'next/router'
import ReaderHead from '../../src/ReaderHead'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(9),
      width: `calc(100% - ${theme.spacing(9) * 2}px)`
  }
}));

export async function getServerSideProps(ctx: any) {
  const res = await fetch("http://localhost:33333/chapter/" + ctx.params.title);
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

function Reader({ data } : any) {
  const classes = useStyles();
  return (
    <>
      <ReaderHead>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
             {data.map((dt: any) => (
                <img style={{ width: '100%'}} src={"http://localhost:33333/image/" + dt.filepath }/>
              ))}
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </ReaderHead>      
    </>
  )
}

export default Reader;
