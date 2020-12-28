module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/**/*.jsx', 'src/**/*.tsx'],
  },

  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
