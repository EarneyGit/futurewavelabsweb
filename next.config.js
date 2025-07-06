/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me', 'images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 