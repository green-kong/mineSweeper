/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  /**
   * Tell Next.js where the `public` folder is.
   */
  assetPrefix: isProd ? '/mineSweeper/' : undefined,
  /**
   * Disable server-based image optimization.
   *
   * @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
   */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
