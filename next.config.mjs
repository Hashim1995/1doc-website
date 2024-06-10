import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./src/i18n.js');
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: "https", hostname: '**'}
        ],
        loader: "custom"
    }
};
 
export default withNextIntl(nextConfig);