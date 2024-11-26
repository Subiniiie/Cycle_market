const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  // Your existing Metro configuration options
};

const mergedConfig = mergeConfig(defaultConfig, customConfig);

module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
