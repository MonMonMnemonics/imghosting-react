import { Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography, Box } from '@material-ui/core';
import PageContainer from "../src/PageContainer";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:33333/all/");
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


const DBDashboard = ({data} : any) => {
    return (
        <PageContainer>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    </Grid>                    

                    <Grid item xs={6}>
                        {/*----------------------   NEW UPLOAD  ----------------------*/}
                        <Box mt={3} mb={3}>
                            <Paper>
                                <h1> UPLOAD NEW CHAPTER </h1>
                                <form method="POST" action="http://localhost:33333/upload-new" encType="multipart/form-data">
                                    <div>
                                        <label>Select multiple images:</label>
                                        <input type="file" name="images" multiple />
                                    </div>
                                    <div>
                                        <label>Chapter Title</label>
                                        <input type="text" name="ChapterIdx"/>
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input type="password" name="Pass"/>
                                    </div>
                                    <div>
                                        <input type="submit" value="Upload" />
                                    </div>
                                </form>
                            </Paper>
                        </Box>

                        {/*----------------------   REUPLOAD  ----------------------*/}
                        <Box mt={3} mb={3}>
                            <Paper>
                            <h1> OVERWRITE CHAPTER </h1>
                                <form method="POST" action="http://localhost:33333/upload-renew" encType="multipart/form-data">
                                    <div>
                                        <label>Select multiple images:</label>
                                        <input type="file" name="images" multiple />
                                    </div>
                                    <div>
                                        <label>Chapter to overwrite:</label>
                                        <select name="ChapterIdx">
                                            {data.map((dt: any) => (
                                                <option value={dt.Chapter}>{dt.Chapter + " (" + new Date(dt.TimeStamp).toDateString() + ")"}</option>
                                            ))}
                                        </select> 
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input type="password" name="Pass"/>
                                    </div>
                                    <div>
                                        <input type="submit" value="Upload" />
                                    </div>
                                </form>
                            </Paper>
                        </Box>

                        {/*----------------------   DELETE ENTRY  ----------------------*/}
                        <Box mt={3} mb={3}>
                            <Paper>
                                <h1> DELETE CHAPTER </h1>
                                <form method="POST" action="http://localhost:33333/remove" encType="application/json">
                                    <div>
                                        <label>Chapter to delete:</label>
                                        <select name="ChapterIdx">
                                            {data.map((dt: any) => (
                                                <option value={dt.Chapter}>{dt.Chapter + " (" + new Date(dt.TimeStamp).toDateString() + ")"}</option>
                                            ))}
                                        </select> 
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input type="password" name="Pass"/>
                                    </div>
                                    <div>
                                        <input type="submit" value="Delete" />
                                    </div>
                                </form>
                            </Paper>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                    </Grid>
                </Grid>
        </PageContainer>
    )
}

export default DBDashboard;