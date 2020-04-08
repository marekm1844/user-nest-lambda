const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const _ = require('lodash');
const slsw = require('serverless-webpack');
require('source-map-support').install();

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebpackBar = require('webpackbar'); // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const rootDir = path.join(__dirname, '../');

const defaults = {
    entry: slsw.lib.entries,
    target: 'node',
    // mode: slsw.lib.webpack.isLocal ? "development" : "production",
    mode: 'none',
    node: {
        __filename: true,
        __dirname: true,
    },
    // externals: slsw.lib.webpack.isLocal ? nodeExternals() : { 'aws-sdk': 'commonjs aws-sdk' }, // dont bundle node_modules when running local
    externals: nodeExternals({
        whitelist: ['winston-cloudwatch']
    }), // packages using awssdk are problem. Lambda has it default
    plugins: [
        // new BundleAnalyzerPlugin()
        // new ForkTsCheckerWebpackPlugin({
        //     checkSyntacticErrors: true
        // }),
        new WebpackBar(),
    ],
    optimization: {
        nodeEnv: false,
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {},
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(rootDir, '.webpack'),
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    /* Loader options go here */
                },
            },
        ],
    },
};

module.exports.defaults = defaults;

module.exports.merge = function merge(config) {
    return _.merge({}, defaults, config);
};