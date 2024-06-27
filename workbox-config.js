module.exports = {
    globDirectory: 'build/',
    globPatterns: [
      '**/*.{html,js,css,png,jpg,jpeg}'
    ],
    swDest: 'build/sw.js',
    runtimeCaching: [{
      urlPattern: ({url}) => url.pathname.startsWith('/secondpage') ||
                             url.pathname.startsWith('/thirdpage') ||
                             url.pathname.startsWith('/fourthpage') ||
                             url.pathname.startsWith('/lastpage'),
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'pages-cache',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 1 Woche
        },
      },
    }],
  };
  