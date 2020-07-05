const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: process.env.NODE_ENV === 'PROD' ? 'production' : 'development',
    devServer: {
        contentBase: path.join(__dirname, "www/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true,
        disableHostCheck: true,
    },
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    resolve: {
        alias: {
          'react-dom': process.env.NODE_ENV === 'PROD' ? 'react-dom' : '@hot-loader/react-dom'
        }
    },
    devtool: 'cheap-module-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
