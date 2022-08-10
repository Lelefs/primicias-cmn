const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  devServer: {
    port: process.env.PORT || 3000,
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: "@import 'src/css/_variables.scss';",
      },
    },
  },

  transpileDependencies: ['vuetify'],
};
