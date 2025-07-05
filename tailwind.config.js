// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.html', './src/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  // purge: ['./src/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  // darkMode: false,
  theme: {
    extends: {
      transitionProperty: {
        height: 'height',
      },
    },
    groupLevel: 10,
    groupScope: 'scope',
    groupVariants: ['hover', 'focus'],
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
    display: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    height: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('tailwindcss-interaction-variants'), require('tailwindcss-nested-groups')],
};
