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
    }
};

export default nextConfig;
