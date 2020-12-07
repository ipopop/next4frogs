import { createMuiTheme } from "@material-ui/core/styles";
import { GreenDark, GreenLight, BloodyRed } from "constants/colors";

export default createMuiTheme({
	// Donne la possibilité de créer une palette de couleur réutilisable dans tout le projet
	palette: {
		primary: {
			main: GreenDark,
		},
		error: {
			main: BloodyRed,
		},
		text: {
			primary: GreenDark,
		},
		background: {
			default: GreenLight,
		},
	},

	// Fournit aussi la possibilitée de pré-deteriminer des styles sur les elements typographiques
	typography: {
		fontFamily: "press-start",
		h1: {
			fontWeight: 700,
			letterSpacing: "-2px",
			fontSize: "3rem",
		},
		h2: {
			fontWeight: 700,
			letterSpacing: "-2px",
			fontSize: "1.6rem",
		},
		h3: {
			fontWeight: 500,
			letterSpacing: "-2px",
			fontSize: "1.2rem",
		},
		h4: {
			fontWeight: 700,
			letterSpacing: "-2px",
			fontSize: "0.8rem",
		},
		h5: {
			fontWeight: 700,
			letterSpacing: "-2px",
			fontSize: "0.6rem",
		},
		body1: {
			letterSpacing: "-2px",
			fontSize: "0.6rem",
		},
	},
});
