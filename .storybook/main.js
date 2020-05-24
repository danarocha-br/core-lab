const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-knobs/register',
    'themeprovider-storybook/register',
    'storybook-formik/register',
    'storybook-addon-designs/register',
    {
      name: "@storybook/addon-docs/preset",
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
          {
            loader: require.resolve('@storybook/source-loader'),
            options: {
              parser: 'typescript',
              uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
              prettierConfig: {
                printWidth: 100,
                singleQuote: true,
              },
             }
          ,}
        ]
      }
    ],

    config.resolve.extensions.push('.ts', '.tsx', '.mdx');
    return config;
  },
};
