module.exports = {
  // Basic configuration
  // ----------
  site: {
    url: "", // Domain your site will run on.
    path: "/", // Specify path to the portfolio. Example: "/portfolio".
    shortTitle: "Minimal Porfolio", // This will display as heading
    fullTitle: "Minimal Porfolio - Simplistic Gatsby porfolio template",
    description:
      "Minimalistic, black on white porfolio page for creative professionals.",
    language: "en",
  },
  /* Your social media and contact information. Leave "null" if you don't want it to show. */
  // ----------
  information: {
    mail: "mailto:mail@example.com",
    linkedIn: "https://example.link",
    twitter: "https://example.link",
    facebook: null,
    github: null,
  },
  // Site appearance settings
  // ----------
  appearance: {
    backgroundColor: "#fcfcfc",
    font: {
      headerFontFamily: "Avenir Next",
      bodyFontFamily: "Georgia",
      baseSize: "16px",
      baseLineHeight: 1.5,
      headerWeight: 700,
      bodyWeight: 400,
      boldBodyWeight: 700,
      headerColor: "#303030",
      bodyColor: "#4f4f4f",
    },
  },
}
