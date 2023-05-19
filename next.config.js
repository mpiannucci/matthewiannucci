/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'hopewaves.app', 
      'govalet-backend.appspot.com', 
    ]
  }, 
  output: 'export',
}

module.exports = nextConfig
