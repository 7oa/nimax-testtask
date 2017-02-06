const isDev = process.env.NODE_ENV == 'development'

const webpack = require('webpack')
const OptimizeJsPlugin = require('optimize-js-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, "./sourse/script.js"),
    output: {
        path: path.join(__dirname, "./f/scripts/"),
        filename: "script.js"
    },
    watch: isDev,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devtool: isDev  ? 'cheap-inline-module-source-map' : false,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(isDev)
        }),
        new OptimizeJsPlugin({
            sourceMap: false
        }),
        new ExtractTextPlugin('../styles/style.css')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.pcss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap=1&importLoaders=1!postcss-loader')
            }
        ]
    },
    postcss: require('./postcss.config')
}


if (!isDev) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}
