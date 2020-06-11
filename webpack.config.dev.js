const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        example: './example/index.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Rainbow-UI',
            favicon: './example/favicon.ico',
            template: './example/index.html'
        })
    ],
})
