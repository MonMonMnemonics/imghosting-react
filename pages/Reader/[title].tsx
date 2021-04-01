import { useRouter } from 'next/router'
import ReaderHead from '../../src/ReaderHead'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(9),
      width: `calc(100% - ${theme.spacing(9) * 2}px)`
  }
}));

const Reader = () => {
  const classes = useStyles();
  const router = useRouter()
  const { title } = router.query

  return (
    <>
      <ReaderHead>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <img style={{ width: '100%'}} src="https://via.placeholder.com/600x800"/>
            <img style={{ width: '100%'}} src="https://via.placeholder.com/600x800"/>
            <img style={{ width: '100%'}} src="https://via.placeholder.com/600x800"/>
            <img style={{ width: '100%'}} src="https://via.placeholder.com/600x800"/>
            <img style={{ width: '100%'}} src="https://via.placeholder.com/600x800"/>
            <img style={{ width: '100%'}} src="https://via.placeholder.com/600x800"/>
            <img style={{ width: '100%'}} src="https://via.placeholder.com/600x800"/>
            <img style={{ width: '100%'}} src="https://via.placeholder.com/600x800"/>
            <img style={{ width: '100%'}} src="https://via.placeholder.com/600x800"/>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </ReaderHead>      
    </>
  )
}

export default Reader
