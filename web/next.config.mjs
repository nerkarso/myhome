/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: '*' }],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
