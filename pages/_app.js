import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css'

const theme = createMuiTheme({});

function App({ Component, pageProps }) {
  useEffect(() => {
    const styles = document.querySelector("#jss-server-side");
    if (styles) {
      styles.parentElement.removeChild(styles);
    }
  }, []);

  return (<>
    <Head>
      <title>Imanity Scans</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}

export default App;
