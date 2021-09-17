/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        clean: true,
        library: 'cmswrapper',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    plugins: [],
};
