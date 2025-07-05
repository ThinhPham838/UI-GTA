// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindcss = require('tailwindcss');
// eslint-disable-next-line no-undef
module.exports = {
  plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
};
