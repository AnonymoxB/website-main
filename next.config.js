/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: 'https://bevoow.jobnation.id/api/v1'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'bevoow.jobnation.id',
                port: '',
                pathname: '/**',
            }
        ]
    }
}

module.exports = nextConfig
