const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './app.bundle.js'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules:[
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            publicPath: path.resolve(__dirname, 'dist'),
            filename: 'app.css'
        }),
        new BrowserSyncPlugin({
            files: '**/*.html',
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: './'
            }
        })
    ]
}