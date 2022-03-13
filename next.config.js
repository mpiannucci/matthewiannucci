/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'hopewaves.app', 
      'govalet-backend.appspot.com'
    ]
  }, 
  distDir: 'build',
}

module.exports = nextConfig
