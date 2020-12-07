import React from "react"
import propTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "constants/theme"

export default function MyApp(props) {
  let ResponsiveFontTheme = responsiveFontSizes(theme)
  const {Component, pageProps} = props

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
		<React.Fragment>
			{/* La balise Head de Next s'utilise de la meme manière qu'un <head> en HTML5 */}
        <Head>
          <title>Next4Frogs</title>
          {/* <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" /> */}
          <meta charSet="utf-8" />
						<meta
							name="viewport"
							content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
						/>
						<meta name="Next4Frogs" content="Apprendre le framework NextJS en français." />

						<meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        {/* Initie la possibilité de modifié le theme global de notre application */}
        <ThemeProvider theme={ResponsiveFontTheme}>
          {/* CssBaseline est une base de référence CSS pour Material-UI */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
		</React.Fragment>
  )
}

MyApp.propTypes = {
  Component: propTypes.elementType.isRequired,
  pageProps: propTypes.object.isRequired,
}