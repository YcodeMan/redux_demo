const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            },

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            '@store': path.join(__dirname, 'src/store'),
            '@redux': path.join(__dirname, 'src/redux'),
            '@components': path.join(__dirname, 'src/components')
        }
    }
}