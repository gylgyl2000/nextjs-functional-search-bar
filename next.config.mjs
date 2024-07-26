/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/nextjs-functional-search-bar",
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'random-person-generator.com',
                port: '',
                pathname: '/storage/**'
            }
        ],
    }
};

export default nextConfig;
