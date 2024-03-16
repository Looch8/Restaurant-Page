const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},

	module: {
		rules: [
			{
				// Loading css
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				// Loading images
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
	],
};
