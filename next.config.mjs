/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["www.google.com", "lens.google.com", "*"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
