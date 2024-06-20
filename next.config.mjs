/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [{
            source: '/',
            destination: '/dashboard/organization/general',
            permanent: true
        },{
            source: '/dashboard',
            destination: '/dashboard/organization/general',
            permanent: true
        }]
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    }    
};

export default nextConfig;
