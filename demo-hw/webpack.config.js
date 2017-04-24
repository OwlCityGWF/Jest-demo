const webpack = require('webpack');

module.exports = {
    entry: { hw: './hw.js' },
    output: {
        filename: './bundle.[name].js'
    },
    module: {
        rules: [
            { 
                test: /\\.js?$/,
                exclude: ['node_modules'], 
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            }
        ]
    }
}