/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "funworldblr.s3.amazonaws.com",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
