const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for the application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js?$/, // Matches .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Uses Babel to transpile JS/JSX files
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"], // Allows imports without specifying extensions
  },
};
