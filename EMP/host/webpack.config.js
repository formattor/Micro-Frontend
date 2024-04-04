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
        port: 9002
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ModuleFederatedPlugin({
            name: 'host',
            remotes: {
                remote: 'remote@http://localhost:9001/remoteEntry.js'
            }
        })
    ]
}