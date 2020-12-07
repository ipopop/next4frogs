import { Box } from "@material-ui/core";

export const Fraugue = ({ step, result }) => {
	// Change le Gif de Fraugue en fonction des etapes de l'app.
	let url;

	switch (step) {
		case 0:
			url = "/static/img/Fraugue/sleep.gif";
			break;
		case 1:
			url = "/static/img/Fraugue/awake.gif";
			break;
		case 2:
			url = "/static/img/Fraugue/talking.gif";
			break;
		case 3:
			url = "/static/img/Fraugue/disapointed.gif";
			break;
		case 4:
			url = "/static/img/Fraugue/talking.gif";
			break;
		case 5:
			url = "/static/img/Fraugue/awake.gif";
			break;
		case 6:
			url = "/static/img/Fraugue/talking.gif";
			break;
		case 7:
			url = "/static/img/Fraugue/happy.gif";
			break;
		case 8:
			url = "/static/img/Fraugue/talking.gif";
			break;
		case 9:
			url = "/static/img/Fraugue/happy.gif";
			break;
		case 10:
			url = "/static/img/Fraugue/talking.gif";
			break;
		case 11:
			url = "/static/img/Fraugue/disapointed.gif";
			break;
		case 12:
			url = "/static/img/Fraugue/happy.gif";
			break;
		default:
			url = "/static/img/Fraugue/sleep.gif";
	}

	return (
		<Box
			position="absolute"
			left={{ xs: "10px", sm: "30px", md: "80px" }}
			width={{ xs: "150px", sm: "220px", md: "400px" }}
			height="auto"
			bottom="103px"
		>
			<img
				src={result ? "/static/img/Fraugue/crying.gif" : url}
				alt="Fraugues Grenouille NextJS"
				width="100%"
				height="100%"
			/>
		</Box>
	);
};

export default Fraugue;
