const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Entry point for the application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Matches .ts and .tsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Uses Babel to transpile TS/TSX files
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"], // Allows imports without specifying extensions
  },
};
