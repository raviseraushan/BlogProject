/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'media-cdn.tripadvisor.com',"127.0.0.1",  'bit.ly', 'myoctocat.com']
  },

}

module.exports = nextConfig
