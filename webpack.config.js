const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'bundle.js'
    },
    mode: 'development',

    module: {
        rules: [{
            test: /\.css/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    node: {
        fs: "empty"
     },

    plugins:[
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }            
        })
    ]
};