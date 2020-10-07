import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


import theme from "../theme";
import { assignLocalStorage } from "../utils/localStorage";

const MyApp = (props)  => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    assignLocalStorage(localStorage);
  }, []);

  return (
      <React.Fragment>
        <Head>
          <title>Հաղթելու ենք</title>
          <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1" />
          <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
          <link href="/static/favicon.ico" rel="icon" />
        </Head>
          <ThemeProvider theme={theme()}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
      </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;