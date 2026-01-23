# idma.ai DNS 配置指南

## 🔍 当前状态

DNS 查询显示 `idma.ai` 域名可能还没有正确配置 DNS 记录。这需要你在域名注册商处配置 DNS。

## 📋 DNS 配置步骤

### 步骤 1：获取 Render 的 DNS 配置信息

1. 登录 Render 控制台：https://dashboard.render.com
2. 进入你的服务（idma-site）
3. 点击 **Settings** → **Custom Domains**
4. 添加自定义域名：`www.idma.ai`
5. Render 会提供 DNS 配置说明，通常包括：

#### 对于 www.idma.ai（推荐）
- **记录类型**: CNAME
- **名称**: www
- **值**: 你的 Render 服务地址（例如：`idma-site.onrender.com`）

#### 对于根域名 idma.ai（可选）
- **记录类型**: A
- **名称**: @ 或留空
- **值**: Render 提供的 IP 地址

### 步骤 2：在域名注册商配置 DNS

#### 如果你使用常见的域名注册商：

**Namecheap:**
1. 登录 Namecheap
2. 进入 Domain List
3. 点击 idma.ai 旁边的 Manage
4. 进入 Advanced DNS
5. 添加 CNAME 记录：
   - Type: CNAME Record
   - Host: www
   - Value: 你的 Render 服务地址
   - TTL: Automatic

**GoDaddy:**
1. 登录 GoDaddy
2. 进入 My Products → Domains
3. 点击 idma.ai 旁边的 DNS
4. 添加 CNAME 记录：
   - Type: CNAME
   - Name: www
   - Value: 你的 Render 服务地址
   - TTL: 1 hour

**Cloudflare:**
1. 登录 Cloudflare
2. 选择 idma.ai 域名
3. 进入 DNS → Records
4. 添加 CNAME 记录：
   - Type: CNAME
   - Name: www
   - Target: 你的 Render 服务地址
   - Proxy status: DNS only（或 Proxied，根据需求）

**其他注册商:**
- 查找 DNS 管理或域名管理页面
- 添加 CNAME 记录指向 Render 服务

### 步骤 3：在 Render 中验证域名

1. 在 Render 的 Custom Domains 页面
2. 点击 "Verify" 或等待自动验证
3. Render 会自动配置 SSL 证书（Let's Encrypt）

## 🔐 额外的 DNS 记录（可选）

### Google Search Console 验证（TXT 记录）

如果需要通过 DNS 验证 Google Search Console：

1. 在 Google Search Console 中选择 "DNS 验证"
2. 获取验证字符串（例如：`google-site-verification=xxxxxxxxxxxxx`）
3. 在域名注册商添加 TXT 记录：
   - Type: TXT
   - Name: @ 或留空
   - Value: `google-site-verification=xxxxxxxxxxxxx`
   - TTL: 1 hour

### 邮件服务（MX 记录）

如果需要使用 `@idma.ai` 邮箱：

1. 在域名注册商添加 MX 记录
2. 根据你的邮件服务提供商配置（如 Google Workspace, Microsoft 365 等）

## ⏱️ DNS 传播时间

- **通常**: 几分钟到几小时
- **最长**: 最多 48 小时（但通常更快）
- **检查方法**: 使用在线工具如 https://dnschecker.org

## ✅ 验证 DNS 配置

### 方法 1：使用在线工具
1. 访问：https://dnschecker.org
2. 输入：`www.idma.ai`
3. 选择记录类型：CNAME
4. 检查全球 DNS 服务器是否已更新

### 方法 2：使用命令行
```powershell
# 检查 CNAME 记录
nslookup -type=CNAME www.idma.ai

# 检查 A 记录（根域名）
nslookup -type=A idma.ai

# 检查 TXT 记录
nslookup -type=TXT idma.ai
```

### 方法 3：在浏览器中测试
1. 等待 DNS 传播（通常 1-2 小时）
2. 访问：https://www.idma.ai
3. 如果看到网站，说明 DNS 配置成功

## 🚨 常见问题

### 问题 1：DNS 查询失败
**原因**: 
- DNS 记录还未配置
- DNS 记录配置错误
- DNS 传播还未完成

**解决**:
1. 确认在域名注册商正确添加了 DNS 记录
2. 等待 DNS 传播（最多 48 小时）
3. 检查记录值是否正确

### 问题 2：网站无法访问
**原因**:
- DNS 未指向 Render
- Render 服务未运行
- SSL 证书未配置

**解决**:
1. 检查 Render 服务状态
2. 确认 Custom Domain 已添加并验证
3. 等待 SSL 证书自动配置（通常几分钟）

### 问题 3：SSL 证书问题
**原因**:
- DNS 未正确配置
- 域名验证失败

**解决**:
1. 确保 DNS 记录正确
2. 在 Render 中重新验证域名
3. 等待 SSL 证书自动生成

## 📝 Render Custom Domain 配置清单

- [ ] 在 Render 中添加自定义域名 `www.idma.ai`
- [ ] 获取 Render 提供的 DNS 配置信息
- [ ] 在域名注册商添加 CNAME 记录
- [ ] 等待 DNS 传播（1-48 小时）
- [ ] 在 Render 中验证域名
- [ ] 等待 SSL 证书自动配置
- [ ] 测试访问 https://www.idma.ai

## 🔗 有用的链接

- **Render DNS 文档**: https://render.com/docs/custom-domains
- **DNS 检查工具**: https://dnschecker.org
- **Google Search Console**: https://search.google.com/search-console

## 📧 需要帮助？

如果遇到 DNS 配置问题：
1. 检查 Render 文档：https://render.com/docs/custom-domains
2. 联系域名注册商技术支持
3. 联系 Render 支持：support@render.com

---

**提示**: DNS 配置完成后，通常需要等待 1-2 小时才能在全球生效。使用 https://dnschecker.org 可以检查 DNS 传播状态。
