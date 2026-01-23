# iDma.ai 网站推广指南

本文档提供了推广 idma.ai 网站的完整策略和操作指南。

## 📊 SEO 优化（已完成）

### ✅ 已配置的功能

1. **元数据优化**
   - 每个页面都有独特的 title 和 description
   - Open Graph 标签（Facebook、LinkedIn 分享）
   - Twitter Card 标签
   - 关键词配置

2. **技术 SEO**
   - `robots.txt` - 搜索引擎爬虫配置
   - `sitemap.xml` - 网站地图（自动生成）
   - 结构化数据（Schema.org）
   - 移动端友好设计

3. **社交媒体分享**
   - 分享按钮组件（Twitter、LinkedIn、Facebook、Email）
   - 原生分享支持（移动设备）

## 🚀 推广策略

### 1. 搜索引擎优化 (SEO)

#### Google Search Console
1. 访问 https://search.google.com/search-console
2. 添加属性：`https://www.idma.ai`
3. 验证网站所有权（DNS 或 HTML 文件）
4. 提交 sitemap：`https://www.idma.ai/sitemap.xml`

#### 关键词策略
主要关键词：
- handwriting capture
- interactive learning
- dual-board tutoring
- remote teaching
- online tutoring
- education technology
- edtech

### 2. 社交媒体推广

#### LinkedIn
- 公司页面：https://linkedin.com/company/idma
- 定期发布：
  - 产品更新
  - 客户案例研究
  - 教育行业洞察
  - 行业新闻

#### YouTube
- 频道：https://youtube.com/@idma
- 内容建议：
  - 产品演示视频
  - 客户成功案例
  - 使用教程
  - 行业专家访谈

#### X (Twitter)
- 账号：@idma
- 定期发布：
  - 产品功能亮点
  - 教育科技新闻
  - 客户反馈
  - 行业趋势

### 3. 内容营销

#### 博客文章建议
1. "How Dual-Board Tutoring Improves Student Engagement"
2. "The Science Behind Handwriting in Learning"
3. "5 Ways to Enhance Remote Teaching with iDma"
4. "Case Study: Transforming Math Tutoring at St. James School"

#### 案例研究
- 已在网站上的 3 个案例研究
- 定期添加新的成功案例

### 4. 付费广告

#### Google Ads
- 关键词广告：handwriting capture, interactive learning
- 展示广告：教育网站、教育科技博客
- 再营销：访问过网站但未转化的用户

#### LinkedIn Ads
- 目标受众：教育工作者、学校管理员、培训经理
- 内容：产品演示、案例研究、免费试用

### 5. 合作伙伴和联盟

#### 教育科技平台
- 与教育软件市场合作
- 参加教育科技展会
- 与教育机构建立合作关系

#### 推荐计划
- 为推荐新客户的现有客户提供奖励
- 合作伙伴佣金计划

## 📱 社交媒体分享功能

网站已集成社交媒体分享按钮，用户可以：
- 分享到 Twitter/X
- 分享到 LinkedIn
- 分享到 Facebook
- 通过邮件分享
- 使用原生分享（移动设备）

## 🔍 分析工具集成

### Google Analytics（可选）

1. 创建 Google Analytics 账号
2. 获取 Measurement ID（格式：G-XXXXXXXXXX）
3. 在 `src/config/site.ts` 中添加：
```typescript
analytics: {
  googleAnalyticsId: "G-XXXXXXXXXX",
}
```
4. 取消注释 `src/app/layout.tsx` 中的 Google Analytics 代码

### 其他分析工具
- Microsoft Clarity（用户行为分析）
- Hotjar（热力图和用户反馈）
- Facebook Pixel（Facebook 广告追踪）

## 📝 内容更新建议

### 定期更新内容
1. **博客文章** - 每月 2-4 篇
2. **案例研究** - 每季度 1-2 个
3. **产品更新** - 及时发布新功能
4. **客户评价** - 收集并展示新评价

### SEO 内容优化
- 每个页面至少 300 字
- 使用标题标签（H1, H2, H3）
- 添加内部链接
- 优化图片 alt 文本
- 使用相关关键词

## 🎯 推广检查清单

### 立即执行
- [x] SEO 元数据配置
- [x] 社交媒体分享按钮
- [x] Sitemap 和 robots.txt
- [ ] 提交到 Google Search Console
- [ ] 提交到 Bing Webmaster Tools
- [ ] 创建社交媒体账号内容

### 短期（1-2 周）
- [ ] 设置 Google Analytics
- [ ] 创建并发布第一篇博客文章
- [ ] 在 LinkedIn 发布公司介绍
- [ ] 在 YouTube 上传产品演示视频
- [ ] 优化所有页面的图片 alt 文本

### 中期（1-3 个月）
- [ ] 建立内容发布计划
- [ ] 开始 Google Ads 广告活动
- [ ] 参加教育科技相关活动
- [ ] 建立合作伙伴关系
- [ ] 收集更多客户评价

### 长期（3-6 个月）
- [ ] 建立品牌知名度
- [ ] 扩大内容库（博客、视频、案例研究）
- [ ] 优化转化率
- [ ] 建立邮件营销列表
- [ ] 开发推荐计划

## 🔗 重要链接

- 网站：https://www.idma.ai
- LinkedIn：https://linkedin.com/company/idma
- YouTube：https://youtube.com/@idma
- Twitter/X：https://x.com/idma
- 联系邮箱：contact@idma.ai

## 📧 联系和反馈

如有推广相关问题，请联系：contact@idma.ai
