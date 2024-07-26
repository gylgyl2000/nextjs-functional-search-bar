/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'random-person-generator.com',
                pathname: '/storage/**'
            }
        ],
    }
};

export default nextConfig;
