const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        example: './example/index.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mous-UI',
            template: './example/index.html'
        })
    ],
})
