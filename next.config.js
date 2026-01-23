/** @type {import('next').NextConfig} */
const nextConfig = {
  // 确保静态资源正确加载
  trailingSlash: false,
  // 生产环境优化
  compress: true,
}

module.exports = nextConfig
