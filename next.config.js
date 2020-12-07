const withCSS = require("@zeit/next-css")
const withImages = require("@zeit/next-images")
const withFonts = require("@zeit/next-fonts")

module.exports = withFonts(withImages(withCSS))