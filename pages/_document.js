import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/styles";
import theme from "constants/theme";

{
	/*
-	_document.js permet de manière asynchrone au serveur, de récuperer les feuilles de style de
	l'application fournies par styled-components et material-ui.
	
- On s'en sert aussi pour enrichir notre application avec des balises html et body personnalisées
*/
}

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const styledComponentSheet = new ServerStyleSheet();
		const materialSheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						styledComponentSheet.collectStyles(materialSheets.collect(<App {...props} />)),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: [
					<React.Fragment key="styles">
						{initialProps.styles}
						{materialSheets.getStyleElement()}
						{styledComponentSheet.getStyleElement()}
					</React.Fragment>,
				],
			};
		} finally {
			styledComponentSheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<html lang="fr" dir="ltr">
					<Head>
						<link rel="stylesheet" href="/static/css/styles.css" />
						<link
							rel="icon"
							href="/static/img/Fraugue/fraugue-mini.png"
							sizes="16x16"
							type="image/png"
						></link>
					</Head>
					<body>
						<Main />
						<NextScript />
					</body>
				</html>
			</Html>
		);
	}
}

export default MyDocument;