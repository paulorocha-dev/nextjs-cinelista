/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
