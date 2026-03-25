/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure we bind to 0.0.0.0 for Cloud Run
  serverExternalPackages: [],
};

export default nextConfig;
