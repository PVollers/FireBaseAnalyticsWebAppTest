/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) => url.pathname.startsWith('/secondpage') ||
               url.pathname.startsWith('/thirdpage') ||
               url.pathname.startsWith('/fourthpage') ||
               url.pathname.startsWith('/lastpage'),
  new StaleWhileRevalidate({
    cacheName: 'pages-cache',
  })
);
/* eslint-enable no-restricted-globals */
