import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export const FinalScoring = ({ score }) => {
	const theme = useTheme();
	const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));

	// change l'url de l'image a afficher en fonction du score
	let source;

	switch (score) {
		case "0":
			source = "/static/img/Hearts/0pc.png";
			break;
		case "1":
			source = "/static/img/Hearts/25pc.png";
			break;
		case "2":
			source = "/static/img/Hearts/50pc.png";
			break;
		case "3":
			source = "/static/img/Hearts/75pc.png";
			break;
		case "4":
			source = "/static/img/Hearts/100pc.png";
			break;
		case "5":
			source = "/static/img/Hearts/100pc-red.png";
			break;

		default:
			source = "/static/img/Hearts/0pc.png";
	}

	return (
		<Box
			height="10%"
			width="100%"
			display="flex"
			alignItems="center"
			justifyContent="center"
			position="relative"
			zIndex="30"
		>
			<img alt="coeur pixel" src={source} style={{ width: "20px", height: "20px", zIndex: 30 }} />
			<Typography
				component="h2"
				variant={matchMoreThanPhones ? "h2" : "body1"}
				style={{ margin: "0% 20px", textAlign: "center" }}
			>
				TON SCORE EST DE&nbsp;:
				{score}
			</Typography>
			<img alt="coeur pixel" src={source} style={{ width: "20px", height: "20px", zIndex: 30 }} />
		</Box>
	);
};

export default FinalScoring;
