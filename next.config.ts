/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    loader: 'cloudinary', // এটি যোগ করুন
    path: 'https://res.cloudinary.com/dzv04zugz/image/upload/', // এটি যোগ করুন
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;