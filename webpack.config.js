// this webpack config file is used after development version is complete
const currentTask = process.env.npm_lifecycle_event
const path = require("path")
//const Dotenv = require("dotenv-webpack")  // for .env
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fse = require("fs-extra")

/*
  didn't make CSS part of our
  webpack workflow for this project. 
  ^ Just manually copying our CSS file to the 'DIST' folder. 
*/
class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy files", function () {
      fse.copySync("./app/styles.css", "./dist/styles.css")

      /*
        In case you needed to copy another file or folder
        such as an "images" folder, you could just
        call fse.copySync() as many times as you need
        to here, to cover all of your files/folders.
      */
    })
  }
}

config = {
  entry: "./app/main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  plugins: [
    // new Dotenv(),   // for .env
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "app/index-template.html",
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
}

//can be directly accessed with http://localhost:3000
if (currentTask == "webpackDev" || currentTask == "dev") {
  config.devtool = "source-map"
  config.devServer = {
    port: 3000,
    static: {
      directory: path.join(__dirname, "app")
    },
    hot: true,
    liveReload: false,
    historyApiFallback: { index: "index.html" }
  }
}

// this creates 'dist' folder
// files inside dist folder is run with help of another script triggered by 'npm run previewDist'
// 'npm run previewDist' triggers previewDist.js file
// previewDist.js file is used for creating a node js server with express
// access it with http://localhost:4000
if (currentTask == "webpackBuild") {
  config.plugins.push(new CleanWebpackPlugin(), new RunAfterCompile())
  config.mode = "production"
  config.output = {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  }
}

module.exports = config
