const isProd = process.env.NODE_ENV === 'production'
const repo = 'testr'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
}

export default nextConfig