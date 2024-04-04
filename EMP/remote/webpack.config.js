const HtmlWebpackPlugin = require('html-webpack-plugin')
const { Configuration } = require('webpack')
const ModuleFederatedPlugin = require('webpack/lib/container/ModuleFederationPlugin')

/**
 * @type {Configuration}
 */
module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        port: 9001
    },
    optimization: {
        splitChunks: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ModuleFederatedPlugin({
            name: 'remote',
            filename: 'remoteEntry.js',
            exposes: {
                './addList': './list.js'
            }
        })
    ]
}

