const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storyshots',
    'themeprovider-storybook/register',
    'storybook-formik/register',
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
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
            },

          },
          {
            loader: require.resolve("react-docgen-typescript-loader"),
            options: {
              tsconfigPath: path.resolve(__dirname, '..', 'tsconfig.json'),
            },
          },
        ]
      }
    ],

    config.resolve.extensions.push('.ts', '.tsx', '.mdx');
    return config;
  },
};
