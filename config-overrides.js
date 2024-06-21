const { override, addWebpackPlugin } = require('customize-cra');
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = override(
  addWebpackPlugin(
    new WorkboxPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, 'src/src-sw.js'), // Pfad zur Quelle des Service Workers
      swDest: 'sw.js', // Ziel im build-Ordner
    })
  )
);
