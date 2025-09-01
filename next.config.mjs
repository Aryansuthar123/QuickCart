/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React ke strict checks enable
  swcMinify: true,       // Fast build with SWC

  // Remote images allow karne ke liye
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '**',
      },
    ],
  },

  // Agar turbopack issue de raha hai to isko OFF rakho
  experimental: {
    turbo: {
      enabled: false,
    },
  },
};

export default nextConfig;
