/* eslint @typescript-eslint/no-var-requires: "off" */
const settings = require('./settings');
module.exports = {
    mode: 'development',
    output: {
        filename: 'bundle.js',
    },
    cache: settings.ENABLE_WEBPACK_DEV_BUILD_CACHE
        ? {
              type: 'filesystem',
              name: 'webpack_dev',
          }
        : false,
};
