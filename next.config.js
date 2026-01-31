const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 确保静态资源正确加载
  trailingSlash: false,
  // 生产环境优化
  compress: true,
  // 在构建时跳过 ESLint 检查
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 显式配置 webpack 别名
  webpack: (config, { isServer }) => {
    // 确保 path 模块正确处理
    const path = require('path');
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
