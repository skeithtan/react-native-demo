module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'react-native-reanimated/plugin' // To be listed last as per documentation: https://docs.swmansion.com/react-native-reanimated/docs/installation
    ],
  };
};
