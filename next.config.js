/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.prismic.io'] 
  },
  compiler: {
    styledComponents: true,
    removeConsole: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
