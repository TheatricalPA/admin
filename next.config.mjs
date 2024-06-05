/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/dashboard/organization/general',
            permanent: true,
          },
        ]
      }    
};

export default nextConfig;
