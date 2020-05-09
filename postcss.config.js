// const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./src/tailwind.config.js'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
  ],
};
