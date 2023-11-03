const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol : 'https',
            hostname : 'funworldblr.s3.amazonaws.com',
          },
        ]
      }
}

module.exports = nextConfig
