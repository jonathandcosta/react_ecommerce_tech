/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname:'**'
        // or
        // hostname:'https://firebasestorage.googleapis.com'
      }
    ]
  }
};

export default nextConfig;
