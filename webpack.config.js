//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.css', '.html']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            /*{
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: './app',
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: './app',
                loader: 'raw'
            }*/
        ]
    },
    plugins: [
        /*new ExtractTextPlugin('[name].bundle.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),*/
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    /*devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }*/
};
