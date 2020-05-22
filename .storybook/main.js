const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-knobs/register',
    'themeprovider-storybook/register',
    'storybook-formik/register',
  ],
  webpackFinal: async config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, '..')],
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("babel-preset-react-app")]
            }
          },

          require.resolve("react-docgen-typescript-loader")
        ]
      }
    ],

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
