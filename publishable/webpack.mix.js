// eslint-disable-next-line import/no-extraneous-dependencies
const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setResourceRoot(process.env.APP_BASENAME);

if (process.env.SYNC === '1') {
  mix.browserSync({
    open: false,
    proxy: '127.0.0.1:8000',
    // middleware: process.env.MOCK === '1' ? [restMock] : false,
    notify: false, // The small pop-over notifications in the browser are not always needed/wanted
    ignore: ['**/*.php'],
    // see https://www.browsersync.io/docs/options#option-serveStatic
    // serveStatic: [
    //   {
    //     route: '/storage',
    //     dir: 'storage/app/public',
    //   },
    // ],
  });
}

if (process.env.ALIAS === '1') {
  mix.alias({
    react: path.join(process.cwd(), 'node_modules/react'),
    axios: path.join(process.cwd(), 'node_modules/axios'),
    'react-redux': path.join(process.cwd(), 'node_modules/react-redux'),
  });
}

mix.webpackConfig({
  output: {
    publicPath: process.env.APP_BASENAME,
    chunkFilename: 'js/app/[id].js?id=[chunkhash]',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss/,
        loader: 'import-glob-loader',
      },
    ],
  },
});

mix.copyDirectory('resources/images', 'public/images');
mix.copy('resources/*', 'public');
mix.copyDirectory('resources/js/locales', 'public/locales');

mix.js('resources/js/index.jsx', 'public/js/app.js').react();

mix.sass('resources/sass/app.scss', 'public/css');

mix.extract();

mix.disableNotifications();
// mix.disableSuccessNotifications();

if (mix.inProduction()) {
  mix.version();
  // mix.sourceMaps();
}

// mix.dump();
