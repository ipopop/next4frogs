import { Box, Link as MuiLink, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export const Socials = () => {
	const theme = useTheme();
	const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));

	return (
		<Box
			width="100%"
			display="flex"
			justifyContent="space-evenly"
			alignItems="center"
			flexDirection={{ xs: "column", sm: "row" }}
		>
			<MuiLink
				href="https://www.youtube.com/channel/UCu7cdWGN_lkjHr2fq3puvMQ/"
				underline="none"
				target={"_blank"}
				style={{ zIndex: "30" }}
			>
				<img
					alt="Youtube"
					src="/static/img/Socials/Youtube.png"
					style={{
						width: matchMoreThanPhones ? "300px" : "150px",
						height: "auto",
						zIndex: "30",
						cursor: "pointer",
					}}
				/>
			</MuiLink>
			<MuiLink
				style={{ zIndex: "30" }}
				href="https://twitter.com/justfukndevit"
				underline="none"
				target={"_blank"}
			>
				<img
					alt="Twitter"
					src="/static/img/Socials/twitter.png"
					style={{
						width: matchMoreThanPhones ? "300px" : "150px",
						height: "auto",
						zIndex: "30",
						cursor: "pointer",
					}}
				/>
			</MuiLink>
		</Box>
	);
};

export default Socials;
