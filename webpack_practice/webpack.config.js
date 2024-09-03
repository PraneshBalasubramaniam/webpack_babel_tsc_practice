const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for the application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
  },
  mode: "production",
};
