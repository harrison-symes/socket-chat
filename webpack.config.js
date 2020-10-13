const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: { 
        index: path.resolve(__dirname, "client", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "public")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "client", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
};