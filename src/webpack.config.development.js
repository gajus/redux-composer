import WriteFilePlugin from 'write-file-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

let devServer,
    distPath;

distPath = path.resolve(__dirname, './../dist');

devServer = {
    contentBase: distPath,
    colors: true,
    quiet: false,
    noInfo: false,
    publicPath: '/static/',
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8000,
    hot: false,
    outputPath: distPath
};

export default {
    devtool: 'eval-source-map',
    debug: true,
    devServer: devServer,
    context: __dirname,
    entry: {
        './app': [
            './app'
        ]
    },
    output: {
        path: distPath,
        filename: '[name].js',
        publicPath: devServer.publicPath
    },
    plugins: [
        new CleanWebpackPlugin([
            distPath
        ], {
            root: path.resolve(__dirname, './..')
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './endpoint/index.html'),
                to: path.resolve(distPath, './index.html')
            }
        ]),
        new WriteFilePlugin({
            test: /\.html$/
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, './'),
                loader: 'babel'
            }
        ]
    }
};
