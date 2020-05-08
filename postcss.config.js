// const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.js'),
    require('postcss-nesting'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
  ],
};
