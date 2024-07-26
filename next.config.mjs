/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/nextjs-functional-search-bar",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
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
