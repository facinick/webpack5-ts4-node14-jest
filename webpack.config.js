/* eslint @typescript-eslint/no-var-requires: "off" */
const { merge } = require('webpack-merge');
const path = require('path');

const WEBPACK_CONFIG_ROOT = 'webpack_config';
const commonConfig = require(path.resolve(__dirname, WEBPACK_CONFIG_ROOT, 'webpack.common'));

module.exports = options => {
    console.log(options);
    const config = require(path.resolve(__dirname, WEBPACK_CONFIG_ROOT, `webpack.${options.environment}`));
    return merge(commonConfig, config); //[4]
};
