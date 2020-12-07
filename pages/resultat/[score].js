import dynamic from "next/dynamic";
import { Box, Typography } from "@material-ui/core";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layouts/Layout";
import Fraugue from "components/Dialog/Fraugue";
import Socials from "components/Dialog/Socials";
import Title from "components/Dialog/Title";
import Button from "components/Dialog/Button";
import Script from "components/Dialog/Script";

const DynamicFinalScore = dynamic(() => import("components/Dialog/FinalScoring"), {
	loading: () => (
		<Box widht="100%" height="auto" textAlign="center">
			<Typography component="h4" variant="h4">
				Loading...
			</Typography>{" "}
		</Box>
	),
});

export const Outcome = () => {
	// useRouter permet la récuperation dynamique du score via l'url.
	const router = useRouter();
	const score = router.query.score;

	// Au clique sur le Titre, l'utilisateur sera renvoyer à l'aide du router sur l'url qu'on push
	const GoBackHome = useCallback(() => {
		if (confirm("Etes vous sur de vouloir retourner à l'accueil ?")) {
			router.push("/");
		}
	});

	return (
		<Layout>
			<Title onClick={GoBackHome} result={true} />
			<Script result={score} />
			<DynamicFinalScore score={score} />
			<Socials />
			<Fraugue result={true} />
			<Button result={true} />
		</Layout>
	);
};

export default Outcome;
