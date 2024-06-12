/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL:
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    REVALIDATE: '86400',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
      },
    ],
  },
}

export default nextConfig
