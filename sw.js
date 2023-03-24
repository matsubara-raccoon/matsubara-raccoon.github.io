importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
    'manifest.webmanifest',
    'apple-touch-icon.png',
    'assets/icon-192.png',
    'assets/icon-512.png',
    'assets/background.jpg',
    'assets/background-dark.jpg',
    'assets/header.png',
    'assets/logo.png',
    'assets/Raccoon.png',
]);