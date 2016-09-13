module.exports = {
  entry: "./js/app.js",
  output: {
    path: __dirname,
    filename: "./js/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: "html?minimize"},
      {test: /\.css$/, loader: "style!css"}
    ]
  }
};
