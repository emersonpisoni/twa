/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === 'development',
  skipWaiting: true,
  basePath: '/twa'
})

module.exports = withPWA({
  // next.js config
  // pwa: {

  // },
  output: 'export'
})