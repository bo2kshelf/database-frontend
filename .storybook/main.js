const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsconfig = path.resolve(__dirname, '../tsconfig.json');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // eslint-disable-next-line require-await
  webpackFinal: async (config) => {
    // add tsconfig-paths-webpack-plugin
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({configFile: tsconfig}),
    ];

    // replace postcss-loader for postcss 8
    const cssRule = config.module.rules.find((rule) =>
      'test.css'.match(rule.test),
    );
    const loaderIndex = cssRule.use.findIndex((loader) => {
      const loaderString = typeof loader === 'string' ? loader : loader.loader;
      return loaderString.includes('postcss-loader');
    });
    cssRule.use[loaderIndex] = 'postcss-loader';

    return config;
  },
};
