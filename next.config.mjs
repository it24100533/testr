

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
  basePath: '',
  assetPrefix: '',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
}

export default nextConfig