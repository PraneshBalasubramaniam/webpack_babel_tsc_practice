const path = require("path");

module.exports = {
  entry: "./dist/babel/index.js", // Entry point for the application
  output: {
    path: path.resolve(__dirname, "dist/webpack"), // Output directory
    filename: "bundle.js", // Output file name
  },
  mode: "production",
};
