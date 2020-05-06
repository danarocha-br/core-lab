const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-knobs/register',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, '..')],
      use: [
        {
          loader: require.resolve('ts-loader'),
        },

        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
