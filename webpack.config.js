const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Dein Einstiegspunkt
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/src-sw.js', // Pfad zur Quelle des Service Workers
      swDest: 'sw.js', // Ziel im build-Ordner
    }),
  ],
};
