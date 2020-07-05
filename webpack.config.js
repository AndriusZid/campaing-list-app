const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === 'PROD' ? 'production' : 'development',
    devServer: {
        contentBase: path.join(__dirname, 'www'),
        compress: true,
        port: 9000
    },
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'www/builds'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
                test: /\.(css)|(.scss)$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    },
    devtool: 'source-map'
};
