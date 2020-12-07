import Speech from "utils/Speech";

// Nativement et sans avoir a installer de server node.js ou express, on stipule que cette route doit
// doit renvoyer le fichier Speech. On pourrais tres bien y ajouter des fonction ou d'autre type de methodes
// à ecouter.
export default (req, res) => {
	res.statusCode = 200;
	res.json(Speech);
};
