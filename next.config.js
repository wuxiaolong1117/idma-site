const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 确保静态资源正确加载
  trailingSlash: false,
  // 生产环境优化
  compress: true,
  // 在构建时跳过 ESLint 检查（ESLint 在 devDependencies 中，生产构建可能不可用）
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 显式配置 webpack 别名
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    }
    return config
  },
}

module.exports = nextConfig
