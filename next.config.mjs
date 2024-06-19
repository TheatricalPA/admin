/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [{
            source: '/',
            destination: '/dashboard/organization/members',
            permanent: true
        },{
            source: '/dashboard',
            destination: '/dashboard/organization/members',
            permanent: true
        },{
            source: '/dashboard/organization',
            destination: '/dashboard/organization/members',
            permanent: true
        },{
            source: '/dashboard/organization/general',
            destination: '/dashboard/organization/members',
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
