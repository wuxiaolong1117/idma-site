/** @type {import('next').NextConfig} */
const nextConfig = {
  // 优化生产环境构建
  output: 'standalone',
  // 确保静态资源正确加载
  trailingSlash: false,
  // 生产环境优化
  compress: true,
}

module.exports = nextConfig
