# Google Analytics 设置指南

本指南将帮助你为 idma.ai 网站设置 Google Analytics。

## 📋 步骤 1：创建 Google Analytics 账号

### 1.1 访问 Google Analytics
1. 访问：https://analytics.google.com/
2. 使用你的 Google 账号登录（建议使用公司邮箱）

### 1.2 创建账号
1. 点击 **"开始测量"** 或 **"Create Account"**
2. 填写账号信息：
   - **账号名称**：iDma International Ltd
   - **国家/地区**：United Kingdom
   - **时区**：London (GMT+0)
   - **货币**：GBP (£)
3. 点击 **"下一步"**

### 1.3 创建属性（Property）
1. **属性名称**：idma.ai
2. **报告时区**：London (GMT+0)
3. **货币**：GBP (£)
4. 点击 **"下一步"**

### 1.4 填写业务信息
1. **行业类别**：教育
2. **业务规模**：根据实际情况选择
3. **使用 Google Analytics 的方式**：
   - ✅ 衡量网站上的互动
   - ✅ 了解用户如何使用我的网站
   - ✅ 优化我的网站
4. 点击 **"创建"**

### 1.5 接受服务条款
- 阅读并接受 Google Analytics 服务条款
- 点击 **"我接受"**

## 🔑 步骤 2：获取 Measurement ID

### 2.1 找到你的 Measurement ID
创建属性后，你会看到：
- **Measurement ID** 格式：`G-XXXXXXXXXX`（GA4）
- 或者：`UA-XXXXXXXXX-X`（Universal Analytics，已弃用）

**重要**：确保使用 **GA4** 格式的 ID（以 `G-` 开头）

### 2.2 复制 Measurement ID
复制完整的 Measurement ID，例如：`G-ABC123XYZ`

## ⚙️ 步骤 3：在网站中配置

### 3.1 编辑配置文件
打开 `src/config/site.ts` 文件

### 3.2 添加 Measurement ID
找到以下代码：
```typescript
analytics: {
  googleAnalyticsId: undefined, // 例如: "G-XXXXXXXXXX"
},
```

将 `undefined` 替换为你的 Measurement ID：
```typescript
analytics: {
  googleAnalyticsId: "G-你的ID", // 例如: "G-ABC123XYZ"
},
```

### 3.3 保存文件
保存 `src/config/site.ts` 文件

## 🚀 步骤 4：部署更改

### 4.1 提交更改
```bash
git add src/config/site.ts
git commit -m "Add Google Analytics Measurement ID"
git push origin main
```

### 4.2 等待部署
- Render 会自动检测更改并重新部署
- 通常需要 5-10 分钟

## ✅ 步骤 5：验证安装

### 5.1 检查实时数据
1. 访问你的网站：https://www.idma.ai
2. 在 Google Analytics 中：
   - 进入 **"报告"** → **"实时"**
   - 你应该能看到自己的访问记录

### 5.2 使用 Google Tag Assistant
1. 安装 Chrome 扩展：[Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. 访问你的网站
3. 点击扩展图标，应该能看到 Google Analytics 标签

### 5.3 检查浏览器控制台
1. 打开浏览器开发者工具（F12）
2. 切换到 **"Network"** 标签
3. 刷新页面
4. 搜索 `gtag` 或 `collect`
5. 应该能看到向 `google-analytics.com` 发送的请求

## 📊 步骤 6：配置重要设置

### 6.1 设置数据流
1. 在 Google Analytics 中，进入 **"管理"** → **"数据流"**
2. 点击你的网站数据流
3. 确认网站 URL 正确：`https://www.idma.ai`

### 6.2 启用增强型测量
1. 在数据流设置中，找到 **"增强型测量"**
2. 启用以下选项：
   - ✅ 页面浏览
   - ✅ 滚动
   - ✅ 出站点击
   - ✅ 站点搜索
   - ✅ 视频互动
   - ✅ 文件下载

### 6.3 设置转化事件（可选）
1. 进入 **"管理"** → **"事件"**
2. 标记重要事件为转化：
   - 表单提交
   - 下载 PDF
   - 视频播放
   - 按钮点击

## 🎯 步骤 7：创建自定义报告

### 7.1 访问报告
1. 进入 **"报告"** → **"概览"**
2. 查看基本指标：
   - 用户数
   - 会话数
   - 页面浏览量
   - 平均会话时长

### 7.2 探索报告
- **"实时"**：查看当前访问者
- **"获客"**：了解流量来源
- **"互动"**：查看用户行为
- **"转化"**：跟踪目标完成情况

## 🔒 隐私和合规

### GDPR 合规
1. 在网站隐私政策中说明使用 Google Analytics
2. 考虑添加 Cookie 同意横幅
3. 可以配置 IP 匿名化（在数据流设置中）

### IP 匿名化设置
1. 在 `src/components/GoogleAnalytics.tsx` 中，可以添加：
```typescript
gtag('config', '${gaId}', {
  page_path: window.location.pathname,
  anonymize_ip: true, // 匿名化 IP 地址
});
```

## 🐛 故障排除

### 问题：看不到数据
- **检查**：确认 Measurement ID 格式正确（`G-XXXXXXXXXX`）
- **检查**：确认代码已部署到生产环境
- **等待**：数据可能需要几分钟才会显示

### 问题：数据不准确
- **检查**：确认没有使用广告拦截器
- **检查**：确认网站没有被防火墙阻止
- **检查**：查看实时报告验证数据收集

### 问题：TypeScript 错误
- **检查**：确认 `googleAnalyticsId` 是字符串类型
- **检查**：确认引号正确

## 📚 有用的资源

- [Google Analytics 官方文档](https://support.google.com/analytics)
- [GA4 学习中心](https://analytics.google.com/analytics/academy/)
- [Next.js 与 Google Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)

## 💡 提示

1. **定期检查数据**：每周查看一次报告，了解网站表现
2. **设置目标**：在 Analytics 中设置业务目标
3. **创建自定义报告**：根据业务需求创建专属报告
4. **使用注释**：在重要日期添加注释，标记营销活动

## 📧 需要帮助？

如果遇到问题，可以：
1. 查看 Google Analytics 帮助中心
2. 联系技术支持：contact@idma.ai

---

**完成设置后，你的网站将开始收集访问数据，帮助你更好地了解用户行为和优化网站表现！** 🎉
